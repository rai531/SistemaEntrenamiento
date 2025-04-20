import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,LoginComponent,RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
