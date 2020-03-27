import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSidenavModule, MatListModule, MatCardModule],
  exports: [MatSidenavModule, MatListModule, MatCardModule],
})
export class MaterialModule {}
