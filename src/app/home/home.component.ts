import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

interface TableData {
  [index: string]: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  colDef = ["col1", "col2", "col3"]
  tableData: TableData[] = [
    { "col1": "value11", "col2": "value21", "col3": "value31" },
    { "col1": "value12", "col2": "value22", "col3": "value32" },
    { "col1": "value13", "col2": "value23", "col3": "value33" }
  ]

  handleSort(event: any) {
    console.log('access handleSort with event ', event);
    const { sortBy, sortDir } = event.detail;
    this.tableData.sort(
      (a: any, b: any) => (a[sortBy] > b[sortBy] ? -1 : 1) * sortDir
    )
  }
  constructor(private router: Router) { }

  onClick() {
    this.router.navigate(['/work-experience']);
  }
  ngOnInit() {
    console.log('Access')
  }
}
