import { Component, OnInit } from '@angular/core';

import { ActiveUsersComponent } from "./active-users/active-users.component";
import { LearnerEngagementComponent } from "./learner-engagement/learner-engagement.component";
import { LearnerPaceComponent } from "./learner-pace/learner-pace.component";
import { FeedbackComponent } from "./feedback/feedback.component";

import {  } from "";

@Component({
  selector: 'app-glance',
  templateUrl: './glance.component.html',
  styleUrls: ['./glance.component.css']
})
export class GlanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
