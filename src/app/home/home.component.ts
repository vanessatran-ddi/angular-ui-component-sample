import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

interface TableData {
  [index: string]: string;
}
interface City {
  name: string;
  code: string;
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
  onDismiss() {
    console.log("dismissed");
  }
  ngOnInit() {
  }
}
