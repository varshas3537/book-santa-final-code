import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAN8IWfrvH-wevdp7UDTWyr1TKptzQbhg4",
    authDomain: "mychatapp-df7af.firebaseapp.com",
    databaseURL: "https://mychatapp-df7af.firebaseio.com",
    projectId: "mychatapp-df7af",
    storageBucket: "mychatapp-df7af.appspot.com",
    messagingSenderId: "172342600676",
    appId: "1:172342600676:web:8d0254a223c659f8109df1"
  };

// var firebaseConfig = {
//     apiKey: "AIzaSyBHcleF1UxQ_2eR5yOoh6zpFH2ymYvZzPg",
//     authDomain: "book-santa-51c46.firebaseapp.com",
//     projectId: "book-santa-51c46",
//     storageBucket: "book-santa-51c46.appspot.com",
//     messagingSenderId: "501958923935",
//     appId: "1:501958923935:web:e2b85e209173696c8934aa"
//   };
// var firebaseConfig = {
//    apiKey: "AIzaSyD20vkngt5mfjulfnXUdkPARbGZrWMoUFI",
//     authDomain: "book-santa-2e09c.firebaseapp.com",
//     databaseURL: "https://book-santa-2e09c-default-rtdb.firebaseio.com",
//     projectId: "book-santa-2e09c",
//     storageBucket: "book-santa-2e09c.appspot.com",
//     messagingSenderId: "709146722723",
//     appId: "1:709146722723:web:7b4a61e62adaa23ddf9a16"
//   };
// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();

