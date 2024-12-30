import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
