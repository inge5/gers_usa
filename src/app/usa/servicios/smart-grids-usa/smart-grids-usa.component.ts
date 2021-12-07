import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { PagesUsaService } from '../../../services/pages-usa.service';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { SeoService } from 'src/app/services/seo.service';

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    // return this.sanitized.bypassSecurityTrustHtml(value);
    switch (type) {
      case 'html': return this.sanitized.bypassSecurityTrustHtml(value);
      case 'style': return this.sanitized.bypassSecurityTrustStyle(value);
      case 'script': return this.sanitized.bypassSecurityTrustScript(value);
      case 'url': return this.sanitized.bypassSecurityTrustUrl(value);
      case 'resourceUrl': return this.sanitized.bypassSecurityTrustResourceUrl(value);
      default: throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}


@Component({
  selector: 'app-smart-grids-usa',
  templateUrl: './smart-grids-usa.component.html',
  styleUrls: ['./smart-grids-usa.component.css']
})
export class SmartGridsUsaComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_2_data: any = {};

  constructor(private _sanitizer: DomSanitizer, private _smartgridusa:PagesUsaService, private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.paginaSmartGrid();
    this._smartgridusa.getSmartGridsUsa()
    .subscribe((res:any) => {
      this.loader = false;
      this.seccion_1_data = res.acf.seccion_1;
      //this.seccion_2_data = res.acf.seccion_2_texto;

      this.seccion_2_data = this._sanitizer.bypassSecurityTrustHtml(res.acf.seccion_2_texto);
      this.seccion_2_data = this.seccion_2_data.changingThisBreaksApplicationSecurity;
    });
  }

}
