# Spotify-albums
Adds the ability to catalog your liked albums from Spotify. Interacts with your own Spotify API. Frontend uses React and Redux, while backend uses Flask, Python, and Click.

### How to use
1. Set up environment labels for Spotify  API 

        Set environment varialbes 'SPOT_ID' and 'SPOT_SECRET' to connect to your own Spotify API. If you don't know, 

2. Set up virtual environment for server.py
        
    Create a virtual envornment

        python -m venv ./venv
    
    Activate the environment

        . ./venv/bin/activate

    Then install requirments for the environment

        python -m pip install -r requirements.txt

3. Run backend on src directory

        python server.py
    
4. Run frontend on frontend directory


        yarn start

5. Use the app!
### FAQ
1. How do I set up my Spotify API
    
    [Follow this link](https://developer.spotify.com/documentation/web-api)