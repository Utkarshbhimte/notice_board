'use strict';

// Initialized WebdevWall
function WebdevWall() {
    // this.checkSetup();
console.log("initialising WebdevWall");
    this.feed = document.getElementById('list');
    this.signInButton = document.getElementById('sign-in');
    this.signOutButton = document.getElementById('sign-out');

    this.initFirebase();

    this.loadFeed();
}

// Initializing Firebase
// Sets up shortcuts to Firebase features and initiate firebase auth.
WebdevWall.prototype.initFirebase = function() {
  console.log("initializing firebase");
    //Shortcuts to Firebase SDK features

    this.database = firebase.database();

};

// Loads chat messages history and listens for upcoming ones.
WebdevWall.prototype.loadFeed = function() {
  console.log("fetching data!!");
    // Reference to the /messages/ database path.
    this.feedRef = this.database.ref().child('feed');
    // Make sure we remove all previous listeners.
    this.feedRef.on('value', function(snap){
      console.log(snap.val());
    });

};

// Checks that the Firebase SDK has been correctly setup and configured.
WebdevWall.prototype.checkSetup = function() {
  if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
    window.alert('You have not configured and imported the Firebase SDK. ' +
        'Make sure you go through the codelab setup instructions.');
  } else if (config.storageBucket === '') {
    window.alert('Your Firebase Storage bucket has not been enabled. Sorry about that. This is ' +
        'actually a Firebase bug that occurs rarely. ' +
        'Please go and re-generate the Firebase initialisation snippet (step 4 of the codelab) ' +
        'and make sure the storageBucket attribute is not empty. ' +
        'You may also need to visit the Storage tab and paste the name of your bucket which is ' +
        'displayed there.');
  }
};

window.onload = function() {
    window.WebdevWall = new WebdevWall();
};
