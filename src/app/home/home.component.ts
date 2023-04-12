import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

interface TableData {
  [index: string]: string;
}
import { faker } from "@faker-js/faker";
interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  colDef = ["col1", "col2", "col3"]
  tableData: TableData[] = [
    { "col1": "z", "col2": "value21", "col3": "value31" },
    { "col1": "a", "col2": "value22", "col3": "value32" },
    { "col1": "b", "col2": "value23", "col3": "value33" }
  ]
  users: User[] = [];
  pageUsers: User[] = [];
  page = 1;
  handlePageChange(event: Event) {
    const e = event as CustomEvent;
    this.page = e.detail.page;

    const offset = (this.page - 1) * 10;
    this.pageUsers = this.users.slice(offset, offset + 10);
  }

  handleSort(event: any) {
    console.log('access handleSort with event ', event);
    const { sortBy, sortDir } = event.detail;
    this.tableData.sort(
      (a: any, b: any) => (a[sortBy] > b[sortBy] ? -1 : 1) * sortDir
    )
  }
  constructor(private router: Router) {
    for (let i = 0; i < 100; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age: faker.datatype.number({ min: 18, max: 60 }),
      });
    }

    this.pageUsers = this.users.slice(0, 10);
  }

  onClick() {
    this.router.navigate(['/work-experience']);
  }
  ngOnInit() {
    console.log('Angular 15 OnInit')
  }
}
