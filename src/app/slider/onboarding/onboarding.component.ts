import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  imports: [],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent {
  currentIndex = signal(0);
  slides = [
    {
      image: './slider_1.png',
      text: 'Discover the finest street art <span class="loop">masterpiece.</span>'
    },
    {
      image: './slider_2.png',
      text: 'Experience the creativity of diverse and distinctive paintings.'
    },
    {
      image: './slider_3.png',
      text: 'Find the perfect offer tailored to your needs.'
    }
  ];

  isLastSlide = computed(() => this.currentIndex() === this.slides.length - 1);
  nextSlide(): void {
    if (!this.isLastSlide()) {
      this.currentIndex.update(v => v + 1);
    }
  }

  startApp(): void {
    console.log('Starting app...');
    // Aquí iría el router.navigate()
  }
}