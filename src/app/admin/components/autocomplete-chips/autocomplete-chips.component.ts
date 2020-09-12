import { COMMA, ENTER } from '@angular/cdk/keycodes'
import { Component, ElementRef, Input, ViewChild } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from '@angular/material/autocomplete'
import { MatChipInputEvent } from '@angular/material/chips'
import { Observable } from 'rxjs'
import { map, startWith } from 'rxjs/operators'

@Component({
  selector: 'app-autocomplete-chips',
  templateUrl: './autocomplete-chips.component.html',
  styleUrls: ['./autocomplete-chips.component.scss'],
})
export class AutocompleteChipsComponent {
  @Input() test: string

  visible = true
  selectable = true
  removable = true
  separatorKeysCodes: number[] = [ENTER, COMMA]

  filteredItems: Observable<string[]>
  @Input() allItems: string[]
  @Input() items: string[] = []
  @Input() formGroup: FormGroup
  control = new FormControl()

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>
  @ViewChild('auto') matAutocomplete: MatAutocomplete

  constructor() {
    this.filteredItems = this.control.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allItems.slice()
      )
    )
  }

  add(event: MatChipInputEvent): void {
    const input = event.input
    const value = event.value.trim().toLowerCase()

    // Add our chip
    if ((value || '') && !this.items?.find((v) => v === value)) {
      this.items.push(value)
    }

    // Reset the input value
    if (input) {
      input.value = ''
    }
    this.formGroup.controls.tags.setValue(this.items)

    this.control.setValue(null)
  }

  remove(fruit: string): void {
    const index = this.items.indexOf(fruit)

    if (index >= 0) {
      this.items.splice(index, 1)
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.items.push(event.option.viewValue)
    this.fruitInput.nativeElement.value = ''
    this.control.setValue(null)
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase()

    return this.allItems.filter(
      (fruit) => fruit.toLowerCase().indexOf(filterValue) === 0
    )
  }
}
