import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Login', component: LoginComponent},
    { path: 'Register', component:RegisterComponent}
];
