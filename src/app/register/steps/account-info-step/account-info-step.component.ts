import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'account-info-step',
  imports: [],
  templateUrl: './account-info-step.component.html',
  styleUrl: './account-info-step.component.css'
})
export class AccountInfoStepComponent {
  @Output() back = new EventEmitter<void>();

  firstName = signal('');
  lastName = signal('');
  isVisible = signal(false);
  password = signal('');
  confirmPassword = signal('');
  agree = signal(false);

  formValid() {
    console.log("Evento");
    return this.firstName() && this.lastName() && this.password() &&
      this.password() === this.confirmPassword() && this.agree();
  }
  updateFirstName(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.firstName.set(inputElement.value);
  }
  updateLastName(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.lastName.set(inputElement.value);
  }

  toggleVisibility() {
    console.log('Toggling visibility');
    this.isVisible.update(v => !v);
  }
  updatePassword(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.password.set(inputElement.value);
  }
  updateConfirmPassword(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.confirmPassword.set(inputElement.value);
  }
  updateAgree(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.agree.set(inputElement.checked);
  }
  register() {
    alert('User registered!');
  }
}
