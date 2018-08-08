import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyBn4MACRKSmToPq3xl3zaQ_9N7gg28J8mE",
	authDomain: "flamelink-boilerplate.firebaseapp.com",
	databaseURL: "https://flamelink-boilerplate.firebaseio.com",
	projectId: "flamelink-boilerplate",
	storageBucket: "flamelink-boilerplate.appspot.com",
	messagingSenderId: "1071696114508"
};

const FIREBASE_APP = firebase.initializeApp(config);

const FIREBASE_DATABASE = FIREBASE_APP.database()

export const DATAREF = FIREBASE_DATABASE.ref('flamelink/environments/production/content/demoData/en-US')

//export defualt FIREBASE_APP;