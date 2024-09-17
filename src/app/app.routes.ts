import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    {
        path: 'homepage-component',
        component: HomepageComponent
    },
    {
        path: 'landingpage-component',
        component: LandingpageComponent
    },
    {
        path: 'login-component',
        component: LoginComponent
    },
    {
        path: 'signup-component',
        component: SignupComponent
    },
];
