import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  //Component lifecycle - init, destroy
  users: any[] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (response: any) => {
        this.users = response.data;
        console.log(this.users);
      },
      error: (error: any)=>{
        console.log(error);
      }
    })
  }

}
