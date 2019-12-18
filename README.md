## Flashcard App

go to `src/Actions/wordActions/searchPhotos.js`
insert there your API key from unsplash

In order to install this app:

- create a new folder for both client and server `mkdir Flashcard-app && cd Flashcard-app`
- client: `git clone https://github.com/DylanBob211/Flashcard-app-client.git`
- server: `git clone https://github.com/DylanBob211/Flashcard-app-backend.git`
- go Into both the directorys and install node_modules: `cd Flashcard-app-client && npm install` `cd Flashcard-app-backend && npm install`

API use:

- create a default.json file in the config dir `touch config/default.json` and set it as shown in the `defaultSample.json` file

This app makes use of Unsplash and Yandex Translate APIs so you must first obtain your API keys

Now you can run the development server from the client
- `cd Flashcard-app-client && npm start`

To use the APIs run the node server
- `node Flashcard-app-backend/server.js`