import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RouterModule } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { AdminComponent } from "./admin.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { BlogComponent } from "./blog/blog.component";
import { BlogEditComponent } from "./blog/edit/edit.component";
import { BlogCreateComponent } from "./blog/create/create.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AdminGuard } from "./admin.guard";
import { ProjectsComponent } from "./projects/projects.component";
import { SharedModule } from "../shared/shared.module";

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
    SharedModule,
    ReactiveFormsModule,
    ProjectsComponent,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: LoginComponent,
      },
      {
        path: "",
        component: AdminComponent,
        canActivate: [AdminGuard],
        children: [
          {
            path: "dashboard",
            component: DashboardComponent,
          },
          {
            path: "projects",
            component: ProjectsComponent,
          },
          {
            path: "blog",
            component: BlogComponent,
          },
          {
            path: "user-profile",
            component: UserProfileComponent,
          },
        ],
      },
    ]),
    CommonModule,
  ],
})
export class AdminModule {}
