import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
// import * as d3 from "d3";
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-learner-engagement',
  templateUrl: './learner-engagement.component.html',
  styleUrls: [
    '../../../../../../node_modules/nvd3/build/nv.d3.css',
    './learner-engagement.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class LearnerEngagementComponent implements OnInit {

  constructor(private http: Http) { }
  ngOnInit() {
  //  let url = 'http://192.168.239.38:3000/api/v1/learning-activities?L_D_UserId=1&CourseId=1';
  let url = '../assets/json/learningActivitiesAPI.json';
    this.http.get(url).map(res => <any>res.json())
      .subscribe(
        resp => {
          console.log(resp);
          var chartData = [{
            "label": "TraineesCompletedTraining",
            "value": resp.data.learnerEngagement.peopleCompletedTraining
          },
          {
            "label": "TotalTrainees",
            "value": 50
          }];
          //Donut chart example
          nv.addGraph(function () {
            var chart = nv.models.pieChart()
              .x(function (d) { return d.label })
              .y(function (d) { return d.value })
              .color(['grey', 'orange'])
              .showLabels(false)
              .labelsOutside(false)
              .growOnHover(false)
              .donut(true)
              .padAngle(0)
              .cornerRadius(0)
              .donutRatio(0.7)
              .startAngle(function (d) { return d.startAngle / 2 - Math.PI / 2; })
              .endAngle(function (d) { return d.endAngle / 2 - Math.PI / 2; }).showLegend(false);
            ;
            chart.tooltip.enabled(false);


            d3.select("#chart svg")
              .datum(chartData)
              .call(chart);

            var svgc = d3.select("#chart svg");

            // svgc.append("text")
            //   .attr("text-anchor", "center")
            //   .text("Mobile OS Distribution");

            return chart;
          });
        })
}
}
