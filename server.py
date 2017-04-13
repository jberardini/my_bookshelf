"""Bookself App for my Favorite Books"""

from flask import Flask, render_template
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.secret_key = 'secret'

@app.route('/')
def index():
	"""Homepage"""

	return render_template('index.html')


if __name__ == '__main__':
	app.debug = True
	DebugToolbarExtension(app)
	app.run(host="0.0.0.0")