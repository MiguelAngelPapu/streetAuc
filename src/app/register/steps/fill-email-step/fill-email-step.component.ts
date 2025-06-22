import { Component, EventEmitter, Output, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'fill-email-step',
  imports: [RouterModule],
  templateUrl: './fill-email-step.component.html',
  styleUrl: './fill-email-step.component.css'
})
export class FillEmailStepComponent {
  @Output() next = new EventEmitter<void>();
  email = signal('');

  updateEmail(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.email.set(inputElement.value);
  }
}
