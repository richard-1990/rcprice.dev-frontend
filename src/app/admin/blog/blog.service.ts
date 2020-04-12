import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
// import { Blog } from './blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private authService: AuthService, private db: AngularFirestore) {}

  async createBlogEntry(title: string) {
    const user = await this.authService.user$.getValue();
    console.log(user);
    // return this.db.collection('boards').add({
    //   title,
    //   uid: user.uid,
    // });
  }
}
