import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";
import { User } from './users/users.model';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public sharedService:SharedService){}

  title = 'to_do_angular';
  users:User[]=[];
ngOnInit(){
  this.users=this.sharedService.getUsers();
}
}
