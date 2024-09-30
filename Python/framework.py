from flask import Flask, render_template
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'                       
# importing a flask object to create our app

class NameForm(FlaskForm):
    name = StringField("What is your name?", validators =[DataRequired()])
    submit = SubmitField('Submit')

@app.route('/', methods=['GET','POST'])
def index():
    name = None
    form = NameForm()
    if form.validate_on_submit():
        name = form.name.data
        form.name.data = ''
    comments = ['Card' , 'User']            
    return render_template('index.html' , comments = comments, form = form, name = name)
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

