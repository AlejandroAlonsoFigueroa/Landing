import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
@Component({
  selector: 'bwl-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  workSteps:       Array<any> = [];
  clientGroup:     Array<any> = [];
  bwlTeam:         Array<any> = [];
  eventList:       Array<any> = [];
  currentEvent:    number     = 1;
  visibleEvent: number         = 0;
  showPrev    : boolean     = false;
  showNext    : boolean     = true;
  //resize values
  mainHeroHeight           : number;
  constructor() {
    this.workSteps = [
      {
        title: "<span class='highlighted yellow'>Los escuchamos</span>",
        description: "Para nosotros es importante entender la necesidad de nuestros clientes desde un inicio, por lo que estamos para escuchar todas sus inquietudes y así para ofrecer la solución más adecuada a sus procesos.",
        imageText: "Paso 1",
        image: "./assets/img/steps/paso1.png",
        icon: "e911",
        color: "yellow",
        reverse: false
      },
      {
        title: "<span class='highlighted red'>Estrechamos la mano</span>",
        description: "Cualquier inversión debe retornar ganancias y es lo que más cuidamos con nuestros clientes, por lo que presentamos la propuesta de solución según el requerimiento con el objetivo de garantizar los resultados esperados y así, estrechar la mano en señal de que cuentan con el mejor equipo a su disposición.",
        imageText: "Paso 2",
        image: "./assets/img/steps/paso2.png",
        icon: "e912",
        color: "red",
        reverse: true
      },
      {
        title: "<span class='highlighted blue'>Caminamos juntos</span>",
        description: "Desarrollamos y entregamos la solución completa con las tecnologías de software más modernas para coadyuvar en el logro de los objetivos de nuestros clientes y, seguiremos tras bambalinas para caminar juntos en el crecimiento de su negocio.",
        imageText: "Paso 3",
        image: "./assets/img/steps/paso3.png",
        icon: "e913",
        color: "blue",
        reverse: false
      },
    ]
    this.clientGroup = [
      {
        name: "Flap",
        image: "./assets/img/allClients/flap.png"
      },
      {
        name: "Ferrer",
        image: "./assets/img/allClients/ferrer.png"
      },
      {
        name: "Cri",
        image: "./assets/img/allClients/cri.png"
      },
      {
        name: "Modelo",
        image: "./assets/img/allClients/modelo.png"
      },
      {
        name: "Enlace",
        image: "./assets/img/allClients/enlace.png"
      },
      {
        name: "Openpay",
        image: "./assets/img/allClients/openpay.png"
      },
      {
        name: "Beagile",
        image: "./assets/img/allClients/beagile.png"
      },
      {
        name: "Detroit",
        image: "./assets/img/allClients/detroit.png"
      },
      {
        name: "Atech",
        image: "./assets/img/allClients/atech.png"
      },
      {
        name: "Bluee",
        image: "./assets/img/allClients/bluee.png"
      },
      {
        name: "tabar",
        image: "./assets/img/allClients/tabar.png"
      },
      {
        name: "kenergy",
        image: "./assets/img/allClients/kenergy.png"
      },
      {
        name: "Cervehogar",
        image: "./assets/img/allClients/cervehogar.png"
      },
      {
        name: "absystems",
        image: "./assets/img/allClients/absystems.png"
      },
      {
        name: "Roastbit",
        image: "./assets/img/allClients/roastbit.png"
      },
      {
        name: "Sep",
        image: "./assets/img/allClients/sep.png"
      },
      {
        name: "ozonoland",
        image: "./assets/img/allClients/ozonoland.png"
      },
      {
        name: "profesionalUrbano",
        image: "./assets/img/allClients/profesionalurbano.png"
      },
      {
        name: "Goute",
        image: "./assets/img/allClients/goute.png"
      },
      {
        name: "mypopstore",
        image: "./assets/img/allClients/mypopstoreapp.png"
      },
      {
        name: "gtrex",
        image: "./assets/img/allClients/gtrex.png"
      },
      {
        name: "Motum",
        image: "./assets/img/allClients/motum.png"
      },
      {
        name: "Joy",
        image: "./assets/img/allClients/joy.png"
      },
      {
        name: "Dental",
        image: "./assets/img/allClients/dental.png"
      },
    ]
    this.bwlTeam = [
      {
        name: 'Reyna Rodriguez Parrazal',
        job: 'Directora de Proyectos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
        image: './assets/img/clients/bbva.png'
      },
      {
        name: 'David Bertani Hernandez',
        job: 'Director General',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
        image: './assets/img/clients/bbva.png'
      },
      {
        name: 'Á. Damián Martínez Delfín',
        job: 'Líder de Proyectos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
        image: './assets/img/clients/bbva.png'
      },
      {
        name: 'Antonio Huerta Reyes',
        job: 'Desarrollador',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
        image: './assets/img/clients/bbva.png'
      },
      {
        name: 'J. de Jesús Toscano García',
        job: 'Desarrollador',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
        image: './assets/img/clients/bbva.png'
      },
      {
        name: 'Enrique Loyo Vela',
        job: 'Diseñador Gráfico IU/UX',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
        image: './assets/img/clients/bbva.png'
      },
      {
        name: 'Nombre equipo',
        job: 'Desarrollador',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
        image: './assets/img/clients/bbva.png'
      },
      {
        name: 'Alejandra Reyes Murrieta',
        job: 'Recursos Humanos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
        image: './assets/img/clients/bbva.png'
      },
      {
        name: 'Nombre equipo',
        job: 'Desarrollador',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
        image: './assets/img/clients/bbva.png'
      }
    ];
    this.eventList = [
      {
        position: 1,
        name: 'Hackathon BBVA 2018',
        image: './assets/img/events/evento1.png',
        description: 'Competencia de nuestro equipo en la tercera edición del Hackathon BBVA 2018 para impulsar el ecosistema de desarrolladores y emprendedores en México.'
      },
      {
        position: 2,
        name: 'AWS Cloud Experience 2018',
        image: './assets/img/events/evento2.png',
        //description: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.'
        description: "Participación en la presentación de los servicios más modernos de Amazon en el AWS Cloud Experience 2018 para fomentar la innovación en nuestros clientes"
      },
      {
        position: 3,
        name: 'Apple WWDC 2019',
        image: './assets/img/events/evento3.png',
        description: 'Asistencia de nuestro lìder de desarrollo en el Apple Worldwide Developers Conference celebrado en San Jose, California.'
      },
      {
        position: 4,
        name: 'ICMVA 2022',
        image: './assets/img/events/evento4.png',
        description: 'Presentación de nuevas aplicaciones de inteligencia artificial en la Conferencia Internacional de Visión Artificial y Aplicaciones (ICMVA 2022), celebrada en Singapur.'
      }
    ]
  }
  ngOnInit(): void {
    this.resizeMainCarrousel(window.screen.height, window.screen.width);
  }
  scrollCarouselMore(item, container) {
    this.visibleEvent +=1;
    this.currentEvent = (this.currentEvent < 3) ? this.currentEvent + 1 : 3;
    if (this.showNext) {
      this.showPrev = true;
      item.scrollLeft += ((item.clientWidth * 0.76) + 30); // 76% >>> width of event-wrapper, 30 >>> margin: 0 15px; margin between images
    }
    this.showNext = item.scrollWidth - (item.scrollLeft + ((item.clientWidth * 0.76) + 30)) > container.clientWidth;
  }
  scrollCarouselLess(item, container) {
    this.visibleEvent -=1;
    this.currentEvent = (this.currentEvent > 1) ? this.currentEvent - 1 : 1;
    if (this.showPrev) {
      this.showNext = true;
      item.scrollLeft -= ((item.clientWidth * 0.76) + 30);
    }
    this.showPrev = container.clientWidth + (item.scrollLeft - ((item.clientWidth * 0.76) + 30)) > container.clientWidth;
  }
  resizeMainCarrousel(innerHeight, innerWidth) {
    if (innerWidth >= 800) {
      this.mainHeroHeight = innerHeight;
    } else {
      this.mainHeroHeight = innerWidth;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeMainCarrousel(event.target.innerHeight, event.target.innerWidth);
  }
  openLocation() {
    window.open("https://www.google.com/maps/dir//Exertia+Barco+Viejo+Villas+Mocambo,+Zona+Hotelera+94299+Veracruz,+Ver./@19.1354814,-96.1040345,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x85c340f8baef64f1:0xca4b7b68ed8413a0!2m2!1d-96.1040345!2d19.1354814");
  }
}