import { TestBed } from '@angular/core/testing'

import { AuthService } from './auth.service'
import { of, BehaviorSubject } from 'rxjs'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'
import { RouterTestingModule } from '@angular/router/testing'

export const AngularFireAuthMocks = {
  authState: of({ uid: 'ABC123' }),
}
export const AngularFirestoreMocks = {
  collection: (name: string) => ({
    doc: (_id: string) => ({
      valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
      set: (_d: any) => new Promise((resolve, _reject) => resolve()),
    }),
  }),
}

describe('AuthService', () => {
  let service: AuthService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: AngularFireAuth, useValue: AngularFireAuthMocks },
        { provide: AngularFirestore, useValue: AngularFirestoreMocks },
      ],
    })
    service = TestBed.inject(AuthService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
