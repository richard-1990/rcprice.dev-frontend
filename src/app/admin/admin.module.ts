import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { RouterModule } from '@angular/router'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { MaterialModule } from '../material/material.module';
import { NavigationComponent } from './navigation/navigation.component'

@NgModule({
  declarations: [LoginComponent, UserProfileComponent, NavigationComponent],
  imports: [
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: LoginComponent,
      },
      {
        path: 'user-profile',
        component: UserProfileComponent,
      },
    ]),
    CommonModule,
  ],
})
export class AdminModule {}
