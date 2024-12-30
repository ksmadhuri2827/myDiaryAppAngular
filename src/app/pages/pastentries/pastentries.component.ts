import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, DatePipe, NgForOf, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {GetpastentriesService} from '../../services/getpastentries.service';
import {AuthService} from '../../services/auth.service';
import {EntriesAndUser, Entry, User} from '../../interfaces/userloginwithentries';

@Component({
  selector: 'app-pastentries',
  imports: [
CommonModule,
    RouterLink,
    DatePipe,
    NgIf,
    NgForOf
  ],
  templateUrl: './pastentries.component.html',
  styleUrl: './pastentries.component.css'
})
export class PastentriesComponent  implements OnInit{

  getpastentriesService=inject(GetpastentriesService);
  authService = inject(AuthService);
  user: User|null=null;
  entrieslist:Entry[]=[];
  entryId: string | null = null;


  constructor(private router: Router) {}

  ngOnInit()
  {
    const{user,entries}=this.authService.getUserData();
    this.user = user;
    console.log(user);

    this.getpastentriesService.getEntries(this.user?.id).subscribe(
      (response: Entry[]) => {
        this.entrieslist=response;
        console.log(response);
        console.log('Entries Fetched successfully', response);
      },
      (error: any) => {
        console.log('Entries Fetched failed', error);
      }
    );
  }

  refreshEntries(): void {
    if (this.user?.id) {
      this.getpastentriesService.getEntries(this.user.id).subscribe(
        (response: Entry[]) => {
          this.entrieslist = response;
          console.log('Entries refreshed successfully', response);
        },
        (error: any) => {
          console.error('Failed to refresh entries', error);
        }
      );
    }
  }
  deleteEntry(entryId: number| undefined):void{
    if (entryId === undefined) {
      console.error('Invalid entry ID');
      return;
    }
    const confirmation = confirm('Are you sure you want to delete this entry?');
    if (confirmation) {
      this.getpastentriesService.deleteEntryById(entryId.toString()).subscribe(
        () => {
          console.log('Entry deleted successfully');
          this.refreshEntries();
        },
        (error: any) => {
          console.error('Failed to delete entry:', error);
        }
      );
    }
  }
  protected readonly length = length;
}


