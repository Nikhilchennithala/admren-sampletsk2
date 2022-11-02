import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-stories-point',
  templateUrl: './stories-point.component.html',
  styleUrls: ['./stories-point.component.css']
})
export class StoriesPointComponent implements OnInit {
  storyPoints: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.dataService.data.subscribe(response => {
      this.storyPoints = response;
      console.log('ress', this.storyPoints);
    });
  }

}
