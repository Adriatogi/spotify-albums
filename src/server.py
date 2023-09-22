from flask import Flask, jsonify, request
from cli_main import cli

# creating a Flask app
app = Flask(__name__)


# on the terminal type: curl http://127.0.0.1:5000/
@app.route("/labels", methods=["GET", "POST"])
def labels():
    if request.method == "GET":
        labels = cli(["gl"], standalone_mode=False)
        return jsonify({"labels": labels})
    elif request.method == "POST":
        label = request.form["label"]
        cli(["al", label], standalone_mode=False)
        return jsonify({"message": f"Succesfully posted label: {label}"}), 200


@app.route("/labels/<string:label>", methods=["DELETE"])
def delete_label(label):
    if request.method == "DELETE":
        cli(["dl", label])


@app.route("/albums/<string:label>", methods=["GET", "POST"])
def label_albums(label):
    if request.method == "GET":
        print(label)
        albums = cli(["gal", label], standalone_mode=False)
        print("albums:", albums)
        return jsonify({"albums": albums})


@app.route("/albums/user/<string:level>", methods=["GET", "POST"])
def user_albums(level):
    if request.method == "GET":
        print(level)
        albums = cli(["gua", level], standalone_mode=False)
        print("albums:", len(albums))
        return jsonify({"albums": albums})


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
