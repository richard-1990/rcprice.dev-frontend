import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [MatSidenavModule, MatListModule, MatCardModule, MatButtonModule],
})
export class MaterialModule {}
