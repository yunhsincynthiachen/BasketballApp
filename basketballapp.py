from flask import render_template, request, Flask

app = Flask(__name__)

@app.route('/')

@app.route('/', methods=['Post'])
def choose_name():
	return render_template("frontpage.html")
	if request.method == 'Post':
		if request.form[''] == "Cynthia":
			return render_template('cynthiastats.html', form=form)
		elif request.forl[''] == "Adit":
			return render_template('aditstats.html', form=form)


if __name__== '__main__':
	app.run()