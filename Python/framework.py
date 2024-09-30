from flask import Flask, url_for, redirect, render_template, session
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

import os
from flask_sqlalchemy import SQLAlchemy
basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'data.sqlite')                   
# importing a flask object to create our app

db = SQLAlchemy(app)

class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(64), unique=True)
    users = db.relationship('User' , backref='role')

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(64), unique=True, index=True)
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))

class NameForm(FlaskForm):
    name = StringField("What is your name?", validators =[DataRequired()])
    submit = SubmitField('Submit')

with app.app_context():
    db.create_all()

@app.route('/', methods=['GET','POST'])
def index():
    form = NameForm()
    if form.validate_on_submit():
        user = User.query.filter_by(name=form.name.data).first()
        if user is None:
            user = User(name=form.name.data)
            db.session.add(user)
            db.session.commit()
            session['known'] = False
        else:
            session['known'] = True
            session['name'] = form.name.data
            form.name.data = ''
            return redirect(url_for('index'))
    return render_template('index.html', form=form, name=session.get('name'), known = session.get('known', False))

# routes the '/' page to our index page


@app.route('/user/<name>')
def user(name):
    return render_template('user.html', name=name)
# makes a new page which takes the user and displays it in a message on the page
@app.route('/egg')
def egg():
    return render_template('egg.html')
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html') , 404

@app.errorhandler(500)
def internal_server_error (e):
    return render_template('500.html') , 500

if __name__ == '__main__':
    app.run(debug=True)
# runs the app

