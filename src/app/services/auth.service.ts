import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { User } from '../models/user.model'

import { auth } from 'firebase/app'

import { AngularFireAuth } from '@angular/fire/auth'
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore'

import { Observable, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<User>
  redirectUrl: string

  constructor(
    private auth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.getUser()
  }

  async getUser() {
    this.user$ = this.auth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
    )
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider()
    const credential = await this.auth.signInWithPopup(provider)
    return this.updateUserData(credential.user)
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    )

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    }

    return userRef.set(data, { merge: true })
  }

  async signOut() {
    await this.auth.signOut()
    this.router.navigate(['/'])
  }
}
