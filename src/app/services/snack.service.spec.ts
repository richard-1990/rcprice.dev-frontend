import { TestBed } from '@angular/core/testing'

import { SnackService } from './snack.service'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { RouterTestingModule } from '@angular/router/testing'

describe('SnackService', () => {
  let service: SnackService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatSnackBarModule, RouterTestingModule],
    })
    service = TestBed.inject(SnackService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
