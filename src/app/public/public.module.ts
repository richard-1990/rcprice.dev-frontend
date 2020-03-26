import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomepageComponent } from './homepage/homepage.component'
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component'

@NgModule({
  declarations: [HomepageComponent, NavigationComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HomepageComponent,
      },
    ]),
    CommonModule,
  ],
})
export class PublicModule {}
