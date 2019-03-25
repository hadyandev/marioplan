import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const fbConfig = require("../config.json");

var config = {
  apiKey: fbConfig.firebaseConfig.api_key,
  authDomain: fbConfig.firebaseConfig.auth_domain,
  databaseURL: fbConfig.firebaseConfig.database_url,
  projectId: fbConfig.firebaseConfig.project_id,
  storageBucket: fbConfig.firebaseConfig.storage_bucket,
  messagingSenderId: fbConfig.firebaseConfig.messaging_sender_id
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
