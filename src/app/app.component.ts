import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './pages/header/header.component';
import {FooterComponent} from './pages/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent,
    FooterComponent,
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-mydiary';
}
