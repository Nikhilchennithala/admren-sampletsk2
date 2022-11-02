import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-sprint-calculator',
  templateUrl: './sprint-calculator.component.html',
  styleUrls: ['./sprint-calculator.component.css']
})
export class SprintCalculatorComponent implements OnInit {
  sprintCalculatorForm: FormGroup;
  isSbumit = false;
  sprints = [{sprintName: 'sprint1', value: 1},
             {sprintName: 'sprint2', value: 2},
             {sprintName: 'sprint3', value: 3},
             {sprintName: 'sprint4', value: 4},
             {sprintName: 'sprint5', value: 5}];
  constructor(private fb: FormBuilder,
              private dataService: DataService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(): void {
    this.sprintCalculatorForm = this.fb.group({
      storyPoint: ['', Validators.required]
    });
  }
  get story() { return this.sprintCalculatorForm.controls; }

  submit(): void {
    this.isSbumit = true;
    if (this.sprintCalculatorForm.invalid) {
      return;
    }
    let data = this.formDetails();
    this.sendNewData(data);
    this.dataService.sendData(data);
  }
  formDetails(): any {
    const SPRINT = this.sprintCalculatorForm.controls.storyPoint.value;
    console.log(SPRINT);
    console.log(Number(SPRINT));
    console.log(this.sprints)
    let datas = this.sprints.filter( item => item.value === Number(SPRINT));
    return datas;
  }
  sendNewData(data: string) {
    this.dataService.sendData(data);
  }

}
