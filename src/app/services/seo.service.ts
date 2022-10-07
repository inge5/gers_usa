import { Injectable } from '@angular/core';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(public titulo: Title, public meta: Meta) {}
  paginaInicio() {
    this.paginaMetaData(
      'Our main commitment is to offer an efficient and reliable service, adjusting to your projects.',
      'GERS is an electrical engineering consulting company that offers electrical engineering consulting services in power system studies, protection & control design, field services, smart grids and specialized trainings.',
      'We execute and monitor the quality of power and energy in your projects and industrial systems / Find in GERS reliable solutions.',
      ''
    );
  }

  paginaPruebaAutomatizacion() {
    this.paginaMetaData(
      'Gers designs and supplies our testing and commissioning equipment for high, medium and low voltage equipment.',
      'GERS provides design and engineering services for power projects such as substation design engineering, LV/HV power distribution system design for industrial facilities and onsite generation, protection and relaying design, device and equipment specifications, and substation automation design.',
      'We are experts in testing power transformers and power charger banks.',
      ''
    );
  }

  paginaSmartGrid() {
    this.paginaMetaData(
      'We focus our consulting services towards the future, specializing in smart grids and smart cities.',
      'GERS is specialized in Smart Grids. They are capable of carrying out and Smart Grid Studies including the integration of renewable generation, Smart Grid Maturity Model - SGMM, Volt/Var Management, FLISR, AMI & Smart Street Lighting.',
      'We specialize in electric mobility, the management of the Big Data Internet and we have constant training and education programs.',
      ''
    );
  }

  paginaEstudiosSistemas() {
    this.paginaMetaData(
      'We take care of the studies of electrical systems for power plants, industrial plants, mining and oil companies Quote now here',
      'GERS specializes in Power System Studies including transmission planning studies, system impact studies, power system control and protection coordination, arc flash studies, EMT studies, short circuit studies, load flow studies, MOD Compliance, NERC Compliance for optimal operating conditions.',
      'We perform electrical system planning and connection studies for conventional and non-conventional energy projects.',
      ''
    );
  }

  paginaProyectos() {
    this.paginaMetaData(
      'These are the projects that have relied on GERS and their great results.',
      'GERS has carried out projects in 45 countries across the globe in the areas of power system studies, protection & control design, field services, smart grids, and specialized courses.',
      'Our results speak for our work, we have a vast experience with more than 20 projects around the world.',
      ''
    );
  }

  paginaDisenoIng() {
    this.paginaMetaData(
      'In Gers we make conceptual, basic or detailed designs for your project guaranteeing the best results.',
      'GERS Field Services include acceptance testing, FAT testing, testing and commissioning of electrical equipment, maintenance testing, generators testing, relay testing, meter testing, circuit breaker testing, field acceptance testing, and more.',
      'Gers helps you with the auditing of your projects and the development of data networks: Lan, WLAN and multimedia networks',
      ''
    );
  }
  paginaNeplan() {
    this.paginaMetaData(
      "Find at GERS our Power Systems Analysis Software Cloud or intranet licenses according to users' needs.",
      'NEPLAN offers cutting-edge functionalities in a friendly graphical environment and with different licensing alternatives (cloud, intranet and local), in order to perform different analyses on a modular concept as well as asset management.',
      'In our NEPLAN graphical editor you can see the load flow, the dynamic simulation and the short circuit providing calculations of possible failures.',
      ''
    );
  }
  paginaCapacitaion() {
    this.paginaMetaData(
      'Train your staff with our educational lectures, check out the next dates here',
      '	GERS regularly carries out trainings, webinars and workshops in many electrical engineering topics. Some topics include Arc Flash, GIS, Renewables, FLISR, Volt/Var Management, Relay Testing, Protection Coordination, Asset Management training, and more.',
      'Find in GERS constant trainings from our expert engineers, do not miss them.',
      ''
    );
  }

  paginaMetaData(
    titulo: string,
    descripcion: string,
    keywords: string,
    url: string = ''
  ): void {
    this.titulo.setTitle(titulo);
    this.meta.updateTag({
      property: 'og:title',
      content: titulo,
    } as MetaDefinition);

    this.meta.updateTag({
      property: 'og:url',
      content: url,
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'twitter:title',
      content: titulo,
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.title',
      content: titulo,
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'description',
      content: descripcion,
    } as MetaDefinition);

    this.meta.updateTag({
      property: 'og:description',
      content: descripcion,
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'twitter:description',
      content: descripcion,
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.description',
      content: descripcion,
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'keywords',
      content: keywords,
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.subject',
      content: keywords,
    } as MetaDefinition);
  }
}
