import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LoginComponent } from './login.component'
import { AngularFireAuth } from '@angular/fire/auth'
import { BehaviorSubject, of } from 'rxjs'
import { AngularFirestore } from '@angular/fire/firestore'
import { RouterTestingModule } from '@angular/router/testing'
import { AuthService } from 'src/app/services/auth.service'

const AngularFirestoreMocks = {
  collection: (name: string) => ({
    doc: (_id: string) => ({
      valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
      set: (_d: any) => new Promise((resolve, _reject) => resolve()),
    }),
  }),
}

const AngularFireAuthMocks = {
  auth: of({ uid: 'ABC123' }),
}

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: AngularFireAuth, useValue: AngularFireAuthMocks },
        { provide: AngularFirestore, useValue: AngularFirestoreMocks },
        {
          provide: AuthService,
          useValue: {
            user$: of({ uid: 'ABC123', email: 'test@email.com' }),
          },
        },
      ],
      declarations: [LoginComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
