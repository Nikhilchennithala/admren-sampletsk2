import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {
  storyForm: FormGroup;
  isSbumit = false;
  datas = [];

  constructor(private fb: FormBuilder,
              private dataService: DataService) { }

  ngOnInit() {
    this.createForm();
    this.setData(this.datas);
  }
  createForm(): void {
    this.storyForm = this.fb.group({
      storyName: ['', Validators.required],
      storyPoint: ['', Validators.required]
    });
  }
  get story() { return this.storyForm.controls; }

  submit(): void {
    this.isSbumit = true;
    if(this.storyForm.invalid) {
      return;
    }
    let data = this.formDetails();
    this.datas = JSON.parse(localStorage.getItem('data'));
    console.log(this.datas)
    this.datas.push(data);
    console.log(this.datas);
    console.log(this.datas);
    this.setData(this.datas);
    this.sendNewData(this.datas);
    this.dataService.sendData(data);
  }
  formDetails(): any {
    const NAME = this.storyForm.controls.storyName.value;
    const POINT = this.storyForm.controls.storyPoint.value;
    let datas = {name: NAME, point: POINT};
    return datas;
  }
  sendNewData(data: any) {
    this.dataService.sendData(data);
  }
  setData(data?: any): void {
    localStorage.setItem('data', JSON.stringify(data))
  }
}
