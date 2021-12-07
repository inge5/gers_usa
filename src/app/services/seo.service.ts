import { Injectable } from '@angular/core';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(public titulo: Title, public meta: Meta) {
  }
paginaInicio(){
  this.paginaMetaData(
    'Our main commitment is to offer an efficient and reliable service, adjusting to your projects.',
    'Our testing, automation and control services, design and engineering, and electrical systems studies have positioned us in the market for over 30 years.',
    'We execute and monitor the quality of power and energy in your projects and industrial systems / Find in GERS reliable solutions.',
    ''
  );
}

paginaPruebaAutomatizacion(){
  this.paginaMetaData(
    'Gers designs and supplies our testing and commissioning equipment for high, medium and low voltage equipment.',
    'Automation based on IEC61850, IEC608070-5-101/104, IEC608070-5-101/104.',
    'We are experts in testing power transformers and power charger banks.',
    ''
  );
}

paginaSmartGrid(){
  this.paginaMetaData(
    "We focus our consulting services towards the future, specializing in smart grids and smart cities.",
    "We modernize electrical networks in a way that seeks to improve the gaps within your organization.",
    "We specialize in electric mobility, the management of the Big Data Internet and we have constant training and education programs.",
    ""
  );
}

paginaEstudiosSistemas(){
  this.paginaMetaData(
    'We take care of the studies of electrical systems for power plants, industrial plants, mining and oil companies Quote now here',
    'Our team has highly trained personnel to perform our systematic studies in national and international electrical networks.',
    'We perform electrical system planning and connection studies for conventional and non-conventional energy projects.',
    ''
  );
}

paginaProyectos(){
  this.paginaMetaData(
    'These are the projects that have relied on GERS and their great results.',
    'We innovate to achieve the success of the projects entrusted to us in more than 20 countries around the world.',
    'Our results speak for our work, we have a vast experience with more than 20 projects around the world.',
    ''
  );
}

paginaDisenoIng(){
  this.paginaMetaData(
    'In Gers we make conceptual, basic or detailed designs for your project guaranteeing the best results.',
    'We design electrical substations, distribution lines and industrial and commercial systems with more than 30 years of experience.',
    'Gers helps you with the auditing of your projects and the development of data networks: Lan, WLAN and multimedia networks',
    ''
  );
}
paginaNeplan(){
  this.paginaMetaData(
    "Find at GERS our Power Systems Analysis Software Cloud or intranet licenses according to users' needs.",
    'With NEPLAN you can perform different analyses on a modular concept offering state-of-the-art functionalities in a graphical environment.',
    'In our NEPLAN graphical editor you can see the load flow, the dynamic simulation and the short circuit providing calculations of possible failures.',
    ''
  );
}
paginaCapacitaion(){
  this.paginaMetaData(
    "Train your staff with our educational lectures, check out the next dates here",
    "Don't stop learning and get trained in our next conferences.",
    'Find in GERS constant trainings from our expert engineers, do not miss them.',
    ''
  );
}

paginaMetaData(titulo: string, descripcion: string, keywords: string, url: string = ""): void{
  this.titulo.setTitle(titulo);
  this.meta.updateTag({
    property: 'og:title',
    content: titulo
  } as MetaDefinition);

  this.meta.updateTag({
    property: 'og:url',
    content: url
  } as MetaDefinition);

  this.meta.updateTag({
    name: 'twitter:title',
    content: titulo
  } as MetaDefinition);

  this.meta.updateTag({
    name: 'DC.title',
    content: titulo
  } as MetaDefinition);

  this.meta.updateTag({
    name: 'description',
    content: descripcion
  } as MetaDefinition);

  this.meta.updateTag({
    property: 'og:description',
    content: descripcion
  } as MetaDefinition);

  this.meta.updateTag({
    name: 'twitter:description',
    content: descripcion
  } as MetaDefinition);

  this.meta.updateTag({
    name: 'DC.description',
    content: descripcion
  } as MetaDefinition);

  this.meta.updateTag({
    name: 'keywords',
    content: keywords
  } as MetaDefinition);

  this.meta.updateTag({
    name: 'DC.subject',
    content: keywords
  } as MetaDefinition);
}
}
