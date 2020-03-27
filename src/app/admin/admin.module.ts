import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { RouterModule } from '@angular/router'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { MaterialModule } from '../material/material.module'
import { NavigationComponent } from './navigation/navigation.component'
import { AdminComponent } from './admin.component'

@NgModule({
  declarations: [
    LoginComponent,
    UserProfileComponent,
    NavigationComponent,
    AdminComponent,
  ],
  imports: [
    MaterialModule,
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
