import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-auto-select',
  templateUrl: './auto-select.component.html',
  styleUrls: ['./auto-select.component.css']
})
export class AutoSelectComponent implements OnInit {
  sprints: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.dataService.data.subscribe(response => {
      this.sprints = response;
      console.log('ress', this.sprints);
    });
  }


}
