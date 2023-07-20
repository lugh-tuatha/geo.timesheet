import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Add the signInWithGoogle() function here
  signInWithGoogle(): void {
    // Implement the Google authentication logic here
    // This function will be called when the "Login with Google" button is clicked.
    console.log('Login with Google clicked');
  }
}
