import {Component, inject} from '@angular/core';
import {Entry, User} from '../../interfaces/userloginwithentries';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-default',
  imports: [],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {
  user: User | null = null;
  entrieslist: Entry[] = [];
  authService = inject(AuthService);
  ngOnInit(): void {
    const { user, entries } = this.authService.getUserData();
    this.user = user;
    this.entrieslist = entries;

    console.log('User:', this.user);
    console.log('Entries:', this.entrieslist);
  }

}
