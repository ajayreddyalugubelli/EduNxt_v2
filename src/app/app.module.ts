import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule} from '@angular/http';
import { NvD3Module } from 'ng2-nvd3';
// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';

//font-awesome
// import { AngularFontAwesomeModule } from "angular-font-awesome";

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HeaderComponent } from './header/header.component';
import { TimeFrameComponent } from './time-frame/time-frame.component';
import { LearnDevelopComponent } from './analytics/learn-develop/learn-develop.component';
import { ActiveUsersComponent } from './analytics/learn-develop/glance/active-users/active-users.component';
import { GlanceComponent } from './analytics/learn-develop/glance/glance.component';
import { LearnerEngagementComponent } from './analytics/learn-develop/glance/learner-engagement/learner-engagement.component';
import { LearnerPaceComponent } from './analytics/learn-develop/glance/learner-pace/learner-pace.component';
import { FeedbackComponent } from './analytics/learn-develop/glance/feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AnalyticsComponent,
    HeaderComponent,
    TimeFrameComponent,
    LearnDevelopComponent,
    ActiveUsersComponent,
    GlanceComponent,
    LearnerEngagementComponent,
    LearnerPaceComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    NvD3Module,
    HttpModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
