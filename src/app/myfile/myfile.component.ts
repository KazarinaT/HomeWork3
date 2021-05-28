import { Component, OnInit } from '@angular/core';
import{Arr} from './MyArr';
@Component({
  selector: 'app-myfile',
  templateUrl: './myfile.component.html',
  styleUrls: ['./myfile.component.css']
})
export class MYfileComponent implements OnInit {
  Arr=["../assets/1.jpg","../assets/2.jpg","../assets/3.jpg"];
  constructor() { }

  ngOnInit(): void {
  }

}
