import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

export const paths = {
  home: 'home',
  about: 'about',
  error: '404',
};
@NgModule({
  declarations: [HomepageComponent, NavigationComponent, ErrorpageComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HomepageComponent,
      },
      {
        path: '**',
        redirectTo: paths.error,
      },
      {
        path: paths.error,
        component: ErrorpageComponent,
      },
    ]),
    CommonModule,
  ],
})
export class PublicModule {}
