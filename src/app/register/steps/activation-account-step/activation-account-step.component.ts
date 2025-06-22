import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'activation-account-step',
  imports: [],
  templateUrl: './activation-account-step.component.html',
  styleUrl: './activation-account-step.component.css'
})
export class ActivationAccountStepComponent {
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  resend() {
    alert('Link resent!');
  }
}
