import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
declare function mainFunction();


@Component({
  selector: 'app-chile',
  templateUrl: './chile.component.html',
  styleUrls: ['./chile.component.css']
})
export class ChileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    mainFunction();
  }

}
