# MoodTunes

MoodTunes is a web app that generates a music playlist based on the user's current mood. The app uses facial expression recognition and/or a mood selection interface to determine the user's mood and then fetches songs from a music API that matches the mood.

## Technologies Used

- React 
- Vite
- Tailwind
- face-api.js
- Spotify API

## Configuration

In order to use the Spotify API, you will need to create a Spotify account and register a new application to get a `client_id` and `client_secret`. You will need to add these variables to a `.env` file in the root of your project.

```bash
VITE_SPOTIFY_CLIENT_ID=<YOUR_SPOTIFY_CLIENT_ID>
VITE_SPOTIFY_CLIENT_SECRET=<YOUR_SPOTIFY_CLIENT_SECRET>
```


## Setup

To run this project, install it locally using npm:

```bash
$ git clone https://github.com/your_username/MoodTunes.git
$ cd MoodTunes
$ npm install
$ npm start
```


## Usage

To use MoodTunes, simply visit the deployed site and either select your mood from the dropdown or allow the facial expression recognition to determine your mood. MoodTunes will then fetch songs from Spotify that match your mood and display them in a playlist.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.
