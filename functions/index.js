const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const addNotification = (notf)=>{
    return admin.firestore().collection('notifications').add(notf);
};
exports.makeAdmin = functions.auth.user().onCreate(user=>{
    const email = user.email;
    if(email==='admin@admin.com'){
        return admin.auth().setCustomUserClaims(user.uid, {admin: true});
    }
    else{
        return null;
    }
});
exports.projectAddedNotification = functions.firestore
                                   .document('/projects/{projectID}')
                                   .onCreate((snapshot, context)=>{
                                       const info = snapshot.data();
                                       const notification = {
                                            content: "added a new project update",
                                            user: `${info.authorFirstName} ${info.authorLastName}`,
                                            time: admin.firestore.FieldValue.serverTimestamp()
                                       }
                                       return addNotification(notification);
                                   });

exports.userJoinedNotification = functions.firestore.document('users/{userId}')
    .onCreate((snapshot, context)=>{
        const notification = {
            content: "joined the forum",
            user: `${snapshot.data().firstName} ${snapshot.data().lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return addNotification(notification);
    });
       

