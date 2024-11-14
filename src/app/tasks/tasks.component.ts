import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from '../shared/common.model';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  constructor(private sharedService:SharedService){}
@Input() id!:string |undefined;
tasks: Task[]=[]
currentUserTasks: Task[] | undefined=[]
ngOnInit(){
  this.tasks= this.sharedService.getTasks();
  this.currentUserTasks = this.tasks.filter(task => task.userId == this.id);

  // if (this.currentUserTasks.length === 0) {
  //   this.currentUserTasks = this.tasks.filter(task => task.userId === '1');
  // }
}
}
