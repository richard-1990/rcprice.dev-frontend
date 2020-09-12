import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatAutocompleteModule } from '@angular/material/autocomplete'

import { AutocompleteChipsComponent } from './autocomplete-chips.component'

describe('AutocompleteChipsComponent', () => {
  let component: AutocompleteChipsComponent
  let fixture: ComponentFixture<AutocompleteChipsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatAutocompleteModule],
      declarations: [AutocompleteChipsComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteChipsComponent)
    component = fixture.componentInstance
    component.allItems = []
    component.items = []
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
