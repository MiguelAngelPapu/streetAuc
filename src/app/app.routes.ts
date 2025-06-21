import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./splash/splash.component').then(s => s.SplashComponent)
    },
    {
        path: 'slider',
        loadComponent: () => import('./slider/onboarding/onboarding.component').then(o => o.OnboardingComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(l => l.LoginComponent)
    }
];
