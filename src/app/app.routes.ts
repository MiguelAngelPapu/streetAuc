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
    },
    {
        path: 'sign-in',
        loadComponent: () => import('./sign-in/sign-in.component').then(s => s.SignInComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./register/register.component').then(r => r.RegisterComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(h => h.HomeComponent)
    }
];
