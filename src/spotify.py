import spotipy
from spotipy.oauth2 import SpotifyOAuth
import os

spot_secret = os.environ["SPOT_SECRET"]
spot_id = os.environ["SPOT_ID"]


class Spot:
    def __init__(self):
        self._sp = spotipy.Spotify(
            auth_manager=SpotifyOAuth(
                client_id=spot_id,
                client_secret=spot_secret,
                redirect_uri="http://127.0.0.1:9090",
                scope="user-library-read",
            )
        )

    def get_user_albums(self, level=0):
        offset = level * 50
        return self._sp.current_user_saved_albums(limit=50, offset=offset)

    def get_user(self):
        return self._sp.current_user()

    def get_all_user_albums(self):
        results = self._sp.current_user_saved_albums(limit=50)
        albums = results["items"]
        while results["next"]:
            results = self._sp.next(results)
            albums.extend(results["items"])
        return albums

    def get_albums_ids(self, ids):
        print("Ids: ", ids)
        albums = self._sp.albums(ids)
        return albums
