from flask import Flask, jsonify, request
from cli_main import cli

# creating a Flask app
app = Flask(__name__)


# on the terminal type: curl http://127.0.0.1:5000/
@app.route("/labels", methods=["GET", "POST"])
def label():
    if request.method == "GET":
        labels = cli(["gl"], standalone_mode=False)
        return jsonify({"labels": labels})
    elif request.method == "POST":
        label = request.form["label"]
        cli(["al", label], standalone_mode=False)
        return


@app.route("/maps", methods=["GET", "POST"])
def maps():
    if request.method == "GET":
        maps = cli(["gm"], standalone_mode=False)
        return jsonify({"maps": maps})
    elif request.method == "POST":
        label = request.form["label"]
        id = request.form["id"]
        cli(["am", label, id], standalone_mode=False)
        return


@app.route("/ping", methods=["GET"])
def ping():
    if request.method == "GET":
        return jsonify({"message": "Ping successfull"})


if __name__ == "__main__":
    app.run(debug=True)
