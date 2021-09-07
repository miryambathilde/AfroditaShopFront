import { Component, OnInit } from '@angular/core';
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myUser: any;
  isAdmin: boolean = false;

  constructor(private usersService: UsersService) { }

  async ngOnInit() {
    this.myUser = await this.usersService.getUser();
    this.isAdmin = (this.myUser.role !== 'A') ? false : true;
    //console.log(this.myUser)
  }
}
