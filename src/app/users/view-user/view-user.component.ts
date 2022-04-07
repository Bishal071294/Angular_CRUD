import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

userId: string='';
userDetails: any;

  constructor( private userService: userService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedroute.params.subscribe(data=> {this.userId=data['id']})

    

    this.userService.viewuser(this.userId).subscribe(data =>
      {this.userDetails=data})
  }

}
