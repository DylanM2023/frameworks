from flask import Flask, render_template
app = Flask(__name__)                       
# importing a flask object to create our app
@app.route('/')
def index():
    comments = ["comment1","comment2","comment3","comment4","comment5"]
    return render_template('index.html', comments = comments)             
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

