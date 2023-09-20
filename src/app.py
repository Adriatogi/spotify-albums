import click
import json
import os

from spotify import spot


class App:
    def __init__(self):
        self._local_save_path = "local_save.json"
        self._data = {}
        self._label_map = {}
        self._labels = []
        self._albums = []
        self._sp = spot()

        self.load()

    @property
    def labels(self):
        return self._labels

    @property
    def map(self):
        return self._label_map

    def add_mapping(self, label, id):
        if label not in self._labels:
            self._labels.append(label)

        if label in self._label_map:
            self._label_map[label].append(id)
        else:
            self._label_map[label] = [id]

    @property
    def local_save(self):
        return self._local_save_path

    # a setter function
    @local_save.setter
    def local_save(self, local_save):
        self._local_save_path = local_save

    # @property # Idk if i want to have the capability to override all data.
    # def data(self):
    #     return self._data

    # # a setter function
    # @local_save.setter
    # def data(self, data):
    #     self._data = data
    #     self.save()

    @property
    def sp(self):
        return self._sp

    def get_albums(self, level):
        return self._sp.get_user_albums(level)

    def get_all_albums(self):
        return self._sp.get_user_all_albums()

    def get_user(self):
        return self._sp.get_user()

    def save(self, path=""):
        path = self._local_save_path if (not path) else path

        self._data["labels"] = self._labels
        self._data["map"] = self._label_map
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
            self._label_map = self._data["map"]

        print("loaded successfully")
