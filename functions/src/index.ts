import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const blogsCreatedAt = functions.firestore
  .document("blogs/{blogId}")
  .onCreate((snap, context) => {
    return snap.ref.set(
      {
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  });
exports.postsUpdatedDate = functions.firestore
  .document("blogs/{postId}")
  .onUpdate((change, blogId) => {
    // const newValue = change.after.data();
    const previousValue = change.before.data();

    if (
      admin.firestore.FieldValue.serverTimestamp() >
      previousValue?.updatedAt + 1000
    ) {
      return change.after.ref.set(
        {
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
    } else {
      return false;
    }
  });
