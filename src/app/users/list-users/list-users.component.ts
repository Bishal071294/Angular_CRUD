import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  listuser:any;
  constructor( private userService: userService) { }

  ngOnInit(): void {

    this.userService.listuser().subscribe(data=>{this.listuser = data;});
  }

}
