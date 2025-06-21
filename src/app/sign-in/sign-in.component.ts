import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
    email = signal('');
    password = signal('');

    isVisible = signal(false);
    toggleVisibility() {
      console.log('Toggling visibility');
      this.isVisible.update(v => !v);
    }
}
