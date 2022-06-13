import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
   
        apiKey: "AIzaSyC8ib956k7URKBWpbxQyTSbCo3lcUQUuyE",
        authDomain: "my-voting-app-25232.firebaseapp.com",
        databaseURL: "https://my-voting-app-25232-default-rtdb.firebaseio.com",
        projectId: "my-voting-app-25232",
        storageBucket: "my-voting-app-25232.appspot.com",
        messagingSenderId: "798373531584",
        appId: "1:798373531584:web:a61aae59851e4956f90225",
        measurementId: "G-H0E3HND141"
    
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();