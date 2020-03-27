import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { RouterModule } from '@angular/router'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { MaterialModule } from '../material/material.module'
import { NavigationComponent } from './navigation/navigation.component'
import { AdminComponent } from './admin.component'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    LoginComponent,
    UserProfileComponent,
    AdminComponent,
    NavigationComponent,
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
