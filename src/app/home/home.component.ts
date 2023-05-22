import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url: string | undefined;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.url = this.route.snapshot.data['url'];
  }
}
