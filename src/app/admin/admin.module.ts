import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { RouterModule } from '@angular/router'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { MaterialModule } from '../material/material.module'
import { NavigationComponent } from './navigation/navigation.component'
import { AdminComponent } from './admin.component'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { DashboardComponent } from './dashboard/dashboard.component'
import { AdminGuard } from './admin.guard'
import { BlogComponent } from './blog/blog.component'
import { ProjectsComponent } from './projects/projects.component'

@NgModule({
  declarations: [
    LoginComponent,
    UserProfileComponent,
    AdminComponent,
    NavigationComponent,
    DashboardComponent,
    BlogComponent,
    ProjectsComponent,
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
        canActivate: [AdminGuard],
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
          {
            path: 'projects',
            component: ProjectsComponent,
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
