import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MaterialModule } from '../material/material.module';
import { AdminComponent } from './admin.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';
import { BlogEditComponent } from './blog/edit/edit.component';
import { BlogCreateComponent } from './blog/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    UserProfileComponent,
    AdminComponent,
    DashboardComponent,
    BlogComponent,
    BlogEditComponent,
    BlogCreateComponent,
  ],
  imports: [
    MaterialModule,
    FontAwesomeModule,
    ReactiveFormsModule,
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
            path: 'blog',
            component: BlogComponent,
          },
          {
            path: 'user-profile',
            component: UserProfileComponent,
          },
        ],
      },
    ]),
    CommonModule,
  ],
})
export class AdminModule {}
