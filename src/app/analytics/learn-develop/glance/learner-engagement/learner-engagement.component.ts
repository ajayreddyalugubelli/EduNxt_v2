import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-learner-engagement',
  templateUrl: './learner-engagement.component.html',
  styleUrls: [
    '../../../../../../node_modules/nvd3/build/nv.d3.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class LearnerEngagementComponent implements OnInit {

  options;
  data;
  ngOnInit() {
    this.options = {
      chart: {
        type: 'pieChart',
        height: 450,
        donut: true,
        x: function(d){return d.key;},
        y: function(d){return d.y;},
        showLabels: true,

        pie: {
            startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
            endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
        },
        duration: 500,
        legend: {
            margin: {
                top: 5,
                right: 10,
                bottom: 5,
                left: 0
            }
        }
      }
    }
    this.data = [
      {
          key: "",
          y: 7
      },
      {
          key: "",
          y: 3
      }
    ];
  }

}
