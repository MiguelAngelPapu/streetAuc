import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
    email = signal('demo@gmail.com');
    password = signal('123');

    isVisible = signal(false);
    toggleVisibility() {
      console.log('Toggling visibility');
      this.isVisible.update(v => !v);
    }
}
