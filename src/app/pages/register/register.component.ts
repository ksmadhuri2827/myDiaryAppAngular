import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  password = '';
  username = '';
  authService = inject(AuthService);
  constructor(private router:Router) {}

  register()
  {
    if (!this.username || !this.password) {
      alert('Please fill in all required fields.');
      return;
    }

    this.authService.registerUser(this.username, this.password).subscribe(
      (response: any) => {
        console.log('Registration successful', response);
        alert('Registration successful! Please sign in.');
        this.router.navigate(['/signin']);
      },
      (error: any) => {
        console.error('Registration failed', error);
        alert('Registration failed. Please try again.');
      }
    );
  }

}
