import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SeoService } from '../../services/seo.service';
declare function mainFunction();

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class UsaComponent implements OnInit {

  constructor(private seo: SeoService, @Inject(PLATFORM_ID) private platformid) { }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformid)){
      mainFunction();
    }
  }

}
