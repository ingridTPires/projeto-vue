import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBVNO0dcKubl_AhgzQVlN7JrY0-EWQKvVc",
  authDomain: "estudo-vue-project.firebaseapp.com",
  databaseURL: "https://estudo-vue-project.firebaseio.com",
  projectId: "estudo-vue-project",
  storageBucket: "estudo-vue-project.appspot.com",
  messagingSenderId: "605266301109",
  appId: "1:605266301109:web:3ab6c5ac420e9547c56efc",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const conteudos = db.collection("conteudos");
const conteudosRelacionados = db.collection("conteudosRelacionados");

export default { db, conteudos, conteudosRelacionados };
