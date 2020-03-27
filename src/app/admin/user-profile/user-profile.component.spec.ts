import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UserProfileComponent } from './user-profile.component'
import { AngularFireAuth } from '@angular/fire/auth'
import { BehaviorSubject, of } from 'rxjs'
import { AngularFirestore } from '@angular/fire/firestore'
import { RouterTestingModule } from '@angular/router/testing'
import { AuthService } from 'src/app/services/auth.service'

const AngularFirestoreMock = {
  collection: (name: string) => ({
    doc: (_id: string) => ({
      valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
      set: (_d: any) => new Promise((resolve, _reject) => resolve()),
    }),
  }),
}

const AngularFireAuthMock = {
  auth: of({ uid: 'ABC123' }),
}

describe('UserProfileComponent', () => {
  let component: UserProfileComponent
  let fixture: ComponentFixture<UserProfileComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: AuthService,
          useValue: {
            user$: of({ uid: 'ABC123', email: 'test@email.com' }),
          },
        },
      ],
      declarations: [UserProfileComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
