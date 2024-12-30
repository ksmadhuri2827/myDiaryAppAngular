import { Component, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule here
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';  // You already import FormsModule, no issues here

@Component({
  selector: 'app-signin',
  standalone: true,
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  imports: [HttpClientModule, FormsModule, RouterLink]  // Make sure HttpClientModule is here
})
export class SigninComponent {
  password = '';
  username = '';
  authService = inject(AuthService);  // Inject the AuthService

  constructor(private router:Router) {}

  login(): void {
    this.authService.authenticateUser(this.username, this.password).subscribe(
      response => {
        this.authService.setUserData(response.user, response.entrieslist);
        this.router.navigate(['/dashboard']);
        console.log('Authentication successful', response);

      },
      error => {
        console.log('Authentication failed', error);
      }
    );
  }
}
