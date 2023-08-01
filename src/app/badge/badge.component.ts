import { Component } from '@angular/core';
import { format } from "date-fns";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})

export class BadgeComponent {
  date = format(new Date(), "yyyy-MM-dd");
  minDate = format(new Date(), "yyyy-MM-dd");
  maxDate = format(this.getDateWithMonthOffset(1), "yyyy-MM-dd");
  reactiveDateFormCtrl = new FormControl(this.date);
  getDateWithMonthOffset(offset: number) {
    const d = new Date();
    d.setMonth(d.getMonth() + offset);
    return d;
  }
  onChange(e: any) {
    this.date = e.detail.value;
  }

}
