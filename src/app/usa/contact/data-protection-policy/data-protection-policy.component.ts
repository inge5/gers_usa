import { Component, OnInit } from '@angular/core';
import { PagesUsaService } from '../../../services/pages-usa.service';

@Component({
  selector: 'app-data-protection-policy',
  templateUrl: './data-protection-policy.component.html',
  styleUrls: ['./data-protection-policy.component.css']
})
export class DataProtectionPolicyComponent implements OnInit {

  constructor(private pagesUsaService: PagesUsaService) { }

  dataProtectionPolicy: any;

  ngOnInit(): void {
    this.traerDatosPaginaPolitica();
  }

  traerDatosPaginaPolitica(){
    this.pagesUsaService.getDataProtectionPolicy().subscribe(resp => {
      this.dataProtectionPolicy = resp;
      // console.log(this.dataProtectionPolicy.acf.data_protection_policy);
    })
  }

}
