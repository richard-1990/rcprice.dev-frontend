import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { QuillModule } from 'ngx-quill'

import { LoginComponent } from './login/login.component'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { AdminComponent } from './admin.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { BlogComponent } from './blog/blog.component'
import { BlogEditComponent } from './blog/edit/edit.component'
import { BlogCreateComponent } from './blog/create/create.component'
import { ReactiveFormsModule } from '@angular/forms'
import { AdminGuard } from './admin.guard'
import { ProjectsComponent } from './projects/projects.component'
import { SharedModule } from '../shared/shared.module'
import { AutocompleteChipsComponent } from './components/autocomplete-chips/autocomplete-chips.component'

@NgModule({
  declarations: [
    LoginComponent,
    UserProfileComponent,
    AdminComponent,
    DashboardComponent,
    BlogComponent,
    BlogEditComponent,
    BlogCreateComponent,
    ProjectsComponent,
    AutocompleteChipsComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    QuillModule.forRoot({
      modules: {
        syntax: false,
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'],

          [{ header: 1 }, { header: 2 }], // custom button values
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
          [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
          [{ direction: 'rtl' }], // text direction

          [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],

          ['clean'], // remove formatting button

          ['link', 'image', 'video'],
        ],
      },
    }),
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
            path: 'blog/:id',
            component: BlogEditComponent,
          },
          {
            path: 'user-profile',
            component: UserProfileComponent,
          },
          {
            // @todo Bespoke user profile paths
            path: 'user-profile/:id',
            component: UserProfileComponent,
          },
        ],
      },
    ]),
    CommonModule,
  ],
})
export class AdminModule {}
