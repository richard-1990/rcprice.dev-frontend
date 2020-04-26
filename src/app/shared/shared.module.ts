import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSortModule } from "@angular/material/sort";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

const modules = [
  CommonModule,
  FontAwesomeModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatMenuModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatCheckboxModule,
  MatSortModule,
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {}
