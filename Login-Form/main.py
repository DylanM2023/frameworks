from flask import Flask, url_for, redirect, render_template, session
from flask_wtf import FlaskForm
from wtforms import *
from wtforms.validators import DataRequired
import os
from flask_sqlalchemy import *

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'data.sqlite')

db = SQLAlchemy(app)

class Accounts(db.Model):
    __tablename__ = 'account_data'
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(64), unique = True, nullable = False)
    password = db.Column(db.String(64), unique = True, nullable = False)
    email = db.Column(db.String(120), unique = True, nullable = False)

class Create_Account(FlaskForm):
    username = StringField("Username", validators=[DataRequired()])
    password = PasswordField("Password", validators=[DataRequired()])
    email = EmailField("Email", validators=[DataRequired()])
    submit = SubmitField('Submit')

class Login(FlaskForm):
    username = StringField("Username", validators=[DataRequired()])
    password = PasswordField("Password", validators=[DataRequired()])
    submit = SubmitField('Login')

with app.app_context():
    db.create_all()

@app.route('/', methods=['GET', 'POST'])
def index():
    form = Login()
    if form.validate_on_submit():
        username = Login(form.username.data)
        password = Login(form.password.data)
        print(username, "  " , password)
        user_pass = db.execute("SELECT * FROM data.sqlite")
        print(user_pass)
        # if db.execute("SELECT password FROM Login WHERE username =:",string(username)) != password:
        #     login.password.append("Password is Incorrect")
            # print ("password incorrect")
    return render_template('login.html', form = form)

@app.route('/create_acc', methods=['GET','POST'])
def create_account():
    form = Create_Account()
    if form.validate_on_submit():
        user = Accounts.query.filter_by(username = form.username.data).first()
        if user is None:
            user = Accounts(username=form.username.data, password=form.password.data, email=form.email.data)
            db.session.add(user)
            db.session.commit()
            session['known'] = False
        else:
            session['known'] = True
            session['name'] = form.username.data
            form.username.data = ''
            return redirect (url_for('index'))
    return render_template('create_acc.html', form = form, username = session.get('name'), known=session.get('known' , False))

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

if __name__ == '__main__':
    app.run(debug=True)