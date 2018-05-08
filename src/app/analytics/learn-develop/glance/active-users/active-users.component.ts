import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
// import * as d3 from "d3";
import 'rxjs/add/operator/map';
// import "d3-3";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  activeUsers  : number;
  userChange : number;
  peopleCurrentlyEnrolled : number;
  usersSinceLastMonth : number;
  constructor(private http:Http) { }

  ngOnInit() {
    // let url = 'http://192.168.239.38:3000/api/v1/learning-activities?L_D_UserId=1&CourseId=1';
    // this.http.get(url).map(res => <any>res.json())
    //   .subscribe(
    //     resp => {
    //       console.log(resp);
    //       this.activeUsers = resp.data.activeUsers.activeUsers;
    //       this.userChange = resp.data.activeUsers.changeInUsers;
    //       this.peopleCurrentlyEnrolled = resp.data.activeUsers.peopleCurrentlyEnrolled;
    //       this.usersSinceLastMonth = resp.data.activeUsers.usersSinceLastMonth;

    //     });
  }

}
