import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MaterialModule } from '../material/material.module';
import { AdminComponent } from './admin.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    LoginComponent,
    UserProfileComponent,
    AdminComponent,
    DashboardComponent,
  ],
  imports: [
    MaterialModule,
    FontAwesomeModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: LoginComponent,
      },
      {
        path: '',
        component: AdminComponent,
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
          {
            path: 'user-profile',
            component: UserProfileComponent,
          },
        ],
      },
    ]),
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ],
})
export class AdminModule {}
