import typing
import datetime
from flask import Flask
from flask import render_template
from flask import request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///posts.db'
db = SQLAlchemy(app)

class BlogPostModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    author = db.Column(db.String(30), nullable=False, default='unknown')
    date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now)

    def __repr__(self):
        return 'Blog post ' + str(self.id)

@app.route('/')
@app.route('/home')
def hello():
    return render_template('index.html')

@app.route('/posts', methods=['GET', 'POST'])
def posts():
    if request.method == 'POST':
        post_title = request.form['title']
        post_author = request.form['author']
        post_content = request.form['content']
        new_post = BlogPostModel(title=post_title, content=post_content, author=post_author)
        db.session.add(new_post)
        db.session.commit()
        return redirect('/posts')
    else:
        all_posts =BlogPostModel.query.order_by(BlogPostModel.date).all()
        return render_template('posts.html', posts=all_posts)

@app.route('/users/<string:name>/profile/<int:id>', methods=['GET'])
def hello_user(name: str, id: int):
    return render_template('profile.html', user_name=name, user_id=id)   
   
@app.route('/shutdown', methods=['GET'])
def shutdown():
    func = request.environ.get('werkzeug.server.shutdown')
    if func is None:
        raise RuntimeError('Not running with the Werkzeug Server')
    func()
    return 'Server shutting down...'

@app.route('/posts/delete/<int:id>')
def delete(id):
    post = BlogPostModel.query.get_or_404(id)
    db.session.delete(post)
    db.session.commit()
    return redirect('/posts')

@app.route('/posts/edit/<int:id>', methods=['GET', 'POST'])
def edit(id):
    post = BlogPostModel.query.get_or_404(id)
    if request.method == 'POST':
        
        post.title = request.form['title']
        post.content = request.form['content']
        post.author= request.form['author']
        # db.session.update(post)
        db.session.commit()
        return redirect('/posts')
    else:
        return render_template('edit.html', post=post)
if __name__ == '__main__':
    app.run(debug=True)
