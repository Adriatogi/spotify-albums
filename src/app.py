import click
import spotipy
import json
import os

from spotipy.oauth2 import SpotifyOAuth

spot_secret = os.environ["SPOT_SECRET"]
spot_id = os.environ["SPOT_ID"]


class App:
    def __init__(self):
        self._local_save_path = "local_save.json"
        self._data = {}

        self.load()
        self.connect()

    @property
    def labels(self):
        return self._labels

    @property
    def local_save(self):
        return self._local_save_path

    # a setter function
    @local_save.setter
    def local_save(self, local_save):
        self._local_save_path = local_save

    @property
    def sp(self):
        return self._sp

    def connect(self):
        self._sp = spotipy.Spotify(
            auth_manager=SpotifyOAuth(
                client_id=spot_id,
                client_secret=spot_secret,
                redirect_uri="http://127.0.0.1:9090",
                scope="user-library-read",
            )
        )

    def get_user(self):
        return self._sp.current_user()

    def save(self, path=""):
        path = self._local_save_path if (not path) else path

        self._data["labels"] = self._labels
        with open(path, "w") as json_file:
            json.dump(self._data, json_file)

        print("Save successfully")

    def load(self, path=""):
        # check if theres something
        path = self._local_save_path if (not path) else path

        # it exists
        if os.path.isfile(path):
            with open(path, "r") as json_file:
                self._data = json.load(json_file)

            # Assume it holds info (Probably make a try except that exits the program)
            # self._label_map = self._data["label_map"]
            self._labels = self._data["labels"]
        else:
            self._label_map = {}
            self._labels = []

        print("loaded successfully")
