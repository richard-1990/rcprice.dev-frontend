import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((_, response) => {
  response.send("Hello from Firebase!");
});

export const blogsCreatedDate = functions.firestore
  .document("blogs/{blogId}")
  .onCreate((snap, context) => {
    return snap.ref.set(
      {
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  });
