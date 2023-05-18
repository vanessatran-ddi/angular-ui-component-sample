import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  isCollapsed = "true";
  ngOnInit() {
  }
  toggleDetails() {
    this.isCollapsed = this.isCollapsed === "true" ? "false" : "true";
  }
}
