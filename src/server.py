from flask import Flask, jsonify, request
from cli_main import cli

# creating a Flask app
app = Flask(__name__)


# on the terminal type: curl http://127.0.0.1:5000/
# returns hello world when we use GET.
# returns the data that we send when we use POST.
@app.route("/labels", methods=["GET", "POST"])
def label():
    if request.method == "GET":
        labels = cli(["gl"], standalone_mode=False)
        return jsonify({"labels": labels})


@app.route("/ping", methods=["GET"])
def ping():
    if request.method == "GET":
        return jsonify({"message": "Ping successfull"})


# driver function
if __name__ == "__main__":
    app.run(debug=True)
