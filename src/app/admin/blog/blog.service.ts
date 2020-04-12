import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from "src/app/services/auth.service";
import { SnackService } from "src/app/services/snack.service";
import { Blog } from "./blog";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
// import { Blog } from './blog';

@Injectable({
  providedIn: "root",
})
export class BlogService {
  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private snackService: SnackService
  ) {}

  async createBlogEntry(title: string) {
    const user = await this.auth.currentUser;
    return await this.db
      .collection("blogs")
      .add({
        title,
        author: user.uid,
      })
      .then((docRef) => {
        return docRef.id;
      })
      .catch((error) => {
        this.snackService.firebaseError(error?.message);
      });
  }

  getBlogEntries(): Observable<Blog[]> {
    return this.db
      .collection("blogs")
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Blog;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  getSingleBlog(id: string) {
    return this.db.collection("blogs").doc(id).valueChanges();
  }
}