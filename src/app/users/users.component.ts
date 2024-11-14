import { Component, Input } from '@angular/core';
import {SharedService} from '../shared/shared.service';
import { User } from './users.model';
import { TasksComponent } from "../tasks/tasks.component";
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
constructor(public sharedService:SharedService){}
@Input() id!:string | undefined;
users:User[]=[];
currentUser:User|undefined;
selectedUser:User|undefined;
ngOnInit(){
  this.users=this.sharedService.getUsers();
  this.currentUser=this.users.find((user)=>user.id==this.id) ||this.users.find((user)=>user.id=='1') ;
}
onSelected(user:any){
  this.selectedUser=user;
}
}
