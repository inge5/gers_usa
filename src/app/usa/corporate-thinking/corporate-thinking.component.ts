import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { PagesUsaService } from '../../services/pages-usa.service';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

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
  selector: 'app-corporate-thinking',
  templateUrl: './corporate-thinking.component.html',
  styleUrls: ['./corporate-thinking.component.css']
})
export class CorporateThinkingComponent implements OnInit {
  seccion1_data: any = [];
  seccion2_data: any = [];
  seccion3_data: any = [];
  link_video_url: any = {};
  urlSafe: SafeResourceUrl;

  loader = true;

  constructor(private _sanitizer: DomSanitizer, private _pagesUsaService:PagesUsaService) { }

  ngOnInit(): void {
    var video, results;
    this._pagesUsaService.getCorporateThinking()
    .subscribe((res:any) => {

      this.loader = false;
      //this.seccion1_data = res.acf.seccion_1;
      this.seccion1_data = this._sanitizer.bypassSecurityTrustHtml(res.acf.seccion_1);
      this.seccion1_data = this.seccion1_data.changingThisBreaksApplicationSecurity;

      this.seccion2_data = res.acf.seccion_2;
      this.seccion3_data = res.acf.seccion_3;
      this.link_video_url = res.acf.link_video;
      if(this.link_video_url === null || this.link_video_url === ''){
        return '';
      }
      results = this.link_video_url.match('[\\?&]v=([^&#]*)');
      video   = (results === null) ? this.link_video_url : results[1];
      this.urlSafe = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.link_video_url); 
    });
  }

}
