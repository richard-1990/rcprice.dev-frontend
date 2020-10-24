import { Component, OnInit } from '@angular/core'

interface MenuItem {
  title: string
  routerLink: string
}
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  menu: MenuItem[] = [
    {
      title: 'Home',
      routerLink: '',
    },
    {
      title: 'About Me',
      routerLink: 'about-me',
    },
    {
      title: 'Portfolio',
      routerLink: 'portfolio',
    },
    {
      title: 'Blog',
      routerLink: 'blog',
    },
    {
      title: 'Contact',
      routerLink: 'contact',
    },
  ]
}
