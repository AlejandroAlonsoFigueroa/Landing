import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwl-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  showPrev    : boolean     = false;
  showNext    : boolean     = true;
  public serviceCards           : Array<any> = [];

  constructor() { 
    this.serviceCards = [
      {
        image: './assets/img/services/software-team.png',
        title: 'Equipos de trabajo',
        link: 'equipos-de-desarrollo'
      },
      {
        image: './assets/img/services/software-development.png',
        title: 'Fábrica de software',
        link: 'desarrollo-productos'
      },
      {
        image: './assets/img/services/digital-transformation.png',
        title: 'Transformación Digital',
        link: 'transformacion-digital'
      },
      {
        image: './assets/img/services/web-sites.png',
        title: 'Plataformas Web',
        link: 'portales-web'
      },
      {
        image: './assets/img/services/mobile-apps.png',
        title: 'Aplicaciones móviles',
        link: 'aplicaciones-moviles'
      },
      /*{
        image: './assets/img/services/cloud-solutions.png',
        title: 'Soluciones basadas en la nube',
        link: 'soluciones-nube'
      },*/
      {
        image: './assets/img/services/cloud-solutions.png',
        title: 'Centro creativo',
        link: 'centro-creativo'
      },
    ]
  }

  ngOnInit(): void {
  }

  scrollCarouselMore(item, container) {
    if (this.showNext) {
      this.showPrev = true;
      item.scrollLeft += item.firstChild.clientWidth;
    }

    this.showNext = item.scrollWidth - (item.scrollLeft + item.firstChild.clientWidth) > container.clientWidth;
  }
  scrollCarouselLess(item, container) {
    if (this.showPrev) {
      this.showNext = true;
      item.scrollLeft -= item.firstChild.clientWidth;
    }

    this.showPrev = container.clientWidth + (item.scrollLeft - item.firstChild.clientWidth) > container.clientWidth;
  }
 

}
