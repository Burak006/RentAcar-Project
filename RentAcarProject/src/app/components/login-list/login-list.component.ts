import { Component, OnInit } from '@angular/core';
import { UsersGetModel } from 'src/app/models/UsersGetModel';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css']
})
export class LoginListComponent implements OnInit {

  users:UsersGetModel[]=[];
  
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers().subscribe(data => this.users = data)
   }

}
