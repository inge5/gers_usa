import { Component, OnInit } from '@angular/core';
declare function mainFunction();

@Component({
  selector: 'app-mexico',
  templateUrl: './mexico.component.html',
  styleUrls: ['./mexico.component.css']
})
export class MexicoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    mainFunction();
  }

}
