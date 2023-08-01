import { Component } from '@angular/core';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.css']
})
export class FormStepperComponent {
  step = 2;
  // controlled by the user based on form completion
  status = ["complete", "1complete", "incomplete", "incomplete"];
  updateStep(event: Event) {
    console.log(event);
    this.step = (event as CustomEvent).detail.step;
  }
  setPage(page: number) {
    if (page < 1 || page > 4) return;
    this.step = page;
  }
}
