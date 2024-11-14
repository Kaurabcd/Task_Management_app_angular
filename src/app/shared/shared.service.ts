import { Injectable } from '@angular/core';
import { User } from '../users/users.model';
import { Task } from './common.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService{
  constructor() { }
   private users:User[]=[
      {
        name: "Alice Johnson",
        id: "1",
        profession: "Software Engineer",
        avatar: "https://example.com/avatars/alice.jpg"
      },
      {
        name: "Bob Smith",
        id: "2",
        profession: "Product Manager",
        avatar: "https://example.com/avatars/bob.jpg"
      },
      {
        name: "Charlie Brown",
        id: "3",
        profession: "UX Designer",
        avatar: "https://example.com/avatars/charlie.jpg"
      },
      {
        name: "Diana Prince",
        id: "4",
        profession: "Data Scientist",
        avatar: "https://example.com/avatars/diana.jpg"
      },
      {
        name: "Evan Davis",
        id: "5",
        profession: "Quality Assurance",
        avatar: "https://example.com/avatars/evan.jpg"
      },
      {
        name: "Fiona Adams",
        id: "6",
        profession: "Human Resources",
        avatar: "https://example.com/avatars/fiona.jpg"
      
  }]
  getUsers(){
    return this.users;
  }
  private tasks: Task[] = [
    {
      id: "1",
      userId: "1",
      title: "Develop login feature",
      description: "Implement authentication for the application",
      status: "In Progress"
    },
    {
      id: "2",
      userId: "1",
      title: "Fix bug in payment module",
      description: "Resolve transaction timeout error",
      status: "Pending"
    },
    {
      id: "3",
      userId: "2",
      title: "Create project roadmap",
      description: "Outline milestones for upcoming release",
      status: "Completed"
    },
    {
      id: "4",
      userId: "2",
      title: "Review UX design",
      description: "Approve design for the main dashboard",
      status: "In Progress"
    },
    {
      id: "5",
      userId: "3",
      title: "Design user profile page",
      description: "Develop UI/UX for profile management",
      status: "Pending"
    },
    {
      id: "6",
      userId: "3",
      title: "Update color palette",
      description: "Revamp application color scheme",
      status: "Completed"
    },
    {
      id: "7",
      userId: "4",
      title: "Data analysis on user trends",
      description: "Analyze user behavior in Q4",
      status: "In Progress"
    },
    {
      id: "8",
      userId: "4",
      title: "Optimize recommendation algorithm",
      description: "Improve model accuracy for recommendations",
      status: "Pending"
    },
    {
      id: "9",
      userId: "5",
      title: "Test mobile application",
      description: "Run regression tests for iOS and Android",
      status: "In Progress"
    },
    {
      id: "10",
      userId: "5",
      title: "Report issues to development",
      description: "Document and escalate bugs",
      status: "Completed"
    },
    {
      id: "11",
      userId: "6",
      title: "Conduct team training",
      description: "Organize workshop on new HR policies",
      status: "Pending"
    },
    {
      id: "12",
      userId: "6",
      title: "Update employee handbook",
      description: "Revise handbook with recent policy updates",
      status: "Completed"
    }
  ];
  getTasks(){
    return this.tasks;
  }
}
