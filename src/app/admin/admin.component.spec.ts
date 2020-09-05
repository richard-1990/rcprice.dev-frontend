import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminComponent } from './admin.component'
import { AuthService } from '../services/auth.service'
import { of } from 'rxjs'

describe('AdminComponent', () => {
  let component: AdminComponent
  let fixture: ComponentFixture<AdminComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useValue: {
            user$: of({ uid: 'ABC123', email: 'test@email.com' }),
          },
        },
      ],
      declarations: [AdminComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
