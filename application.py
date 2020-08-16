from flask import Flask, render_template, redirect, jsonify

# instanciate the application object
app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

# qoutes
quotes = {
    "quotes": [
        {"quote": "Genius is 1 percent inspiration and 99 percent perspiration.", "author": "Thomas Edison"},
        {"quote": "Nothing is impossible; the word itself says \"I'm possible.\"", "author": "Audrey Hepburn"},
        {"quote": "Life is 10 percent what happens to me and 90 percent how I react to it.", "author": "Charles Swindoll"},
        {"quote": "No one can make you feel inferior without your consent.", "author": "Eleanor Roosevelt"},
        {"quote": "Do or do not. There is no try.", "author": "Yoda"},
        {"quote": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein"},
        {"quote": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", "author": "Henry Ford"},
        {"quote": "If you hear a voice within you say \"You cannot paint,\" then by all means paint and that voice will be silenced.", "author": "Vincent van Gogh"},
        {"quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
        {"quote": "The most difficult thing is the decision to act; the rest is merely tenacity.", "author": "Amelia Earhart"},
        {"quote": "Don't judge each day by the harvest you reap but by the seeds that you plant.", "author": "Robert Louis Stevenson"},
        {"quote": "A truly rich man is one whose children run into his arms when his hands are empty.", "author": "Anonymous"},
        {"quote": "What's money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.", "author": "Bob Dylan"},
        {"quote": "If you want to lift yourself up, lift up someone else.", "author": "Booker T. Washington"},
        {"quote": "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.", "author": "Helen Keller"},
        {"quote": "How wonderful it is that nobody need wait a single moment before starting to improve the world.", "author": "Anne Frank"},
        {"quote": "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", "author": "Plato"},
        {"quote": "What we achieve inwardly will change outer reality.", "author": "Plutarch"},
    ],
}

@app.route("/", methods=["GET"])
@app.route("/index", methods=["GET"])
def index():
    """renders the main index page"""
    return render_template("index.html")


@app.route("/quotes", methods=["GET"])
def data():
    """returns quotes in json format"""
    return jsonify(quotes)


@app.route("/D3", methods=["GET"])
def D3():
    """returns the data about D3"""
    return jsonify({"D3": "D3.js is a JavaScript library for producing dynamic, interactive data visualizations in web browsers. It makes use of Scalable Vector Graphics, HTML5, and Cascading Style Sheets standards. It is the successor to the earlier Protovis framework."})


@app.route("/Handlebars", methods=["GET"])
def Handlebars():
    """returns the data about Handlebars"""
    return jsonify({"Handlebars": "Handlebars provides the power necessary to let you build semantic templates effectively with no frustration. Handlebars is largely compatible with Mustache templates. In most cases it is possible to swap out Mustache with Handlebars and continue using your current templates."})


@app.route("/Bootstrap", methods=["GET"])
def Bootstrap():
    """returns the data about Bootstrap"""
    return jsonify({"Bootstrap": "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components."})


@app.route("/Flask", methods=["GET"])
def Flask():
    """returns the data about Flask"""
    return jsonify({"Flask": "Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions."})


if __name__ == '__main__':
    # run the app
    app.run(debug=True)