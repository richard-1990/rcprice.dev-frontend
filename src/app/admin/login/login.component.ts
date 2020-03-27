import { Component } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public auth: AuthService, public router: Router) {
    auth.user$.subscribe((user) => {
      if (user) {
        this.router.navigate(['/admin/user-profile'])
      }
    })
  }
}
