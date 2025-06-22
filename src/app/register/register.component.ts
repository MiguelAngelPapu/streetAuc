import { Component, signal } from '@angular/core';
import { FillEmailStepComponent } from './steps/fill-email-step/fill-email-step.component';
import { ActivationAccountStepComponent } from './steps/activation-account-step/activation-account-step.component';
import { AccountInfoStepComponent } from './steps/account-info-step/account-info-step.component';

@Component({
  selector: 'app-register',
  imports: [FillEmailStepComponent, ActivationAccountStepComponent,AccountInfoStepComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  step = signal(0);
  nextStep = () => this.step.update(v => Math.min(v + 1, 2));
  prevStep = () => this.step.update(v => Math.max(v - 1, 0));
}
