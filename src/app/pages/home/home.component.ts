import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderPHPService } from 'src/app/shared/services/provider-php.service';


@Component({
  selector: 'bwl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  classToApply = "ninguna";

  chooseClass(element){
    if(element.isSelected == true && element.darkSurface == true){
      this.classToApply = ""

    }else if(element.isSelected == true  && element.darkSurface == false){
      this.classToApply = "selected"
    }else{
      this.classToApply = "nonSelected"
    }


    
  }


  menuElements=  [
    {section: "whoWeAre", isSelected: true, realText: "QUIENES SOMOS",  darkSurface: true }, 
    {section: "services", isSelected: false, realText: "SERVICIOS",  darkSurface: false}, 
    {section: "technologies", isSelected: false, realText: "TECNOLOGÍAS",  darkSurface: false}, 
    {section: "reviews", isSelected: false , realText: "RESEÑAS",  darkSurface: false }, 
    {section: "contact", isSelected: false, realText: "CONTACTO", darkSurface: false}, 

  ]

  section1: any;
  section2: any;
  section3: any;
  section4: any;
  section5: any;


  posSection1: any;
  posSection2: any;
  posSection3: any;
  posSection4: any;
  posSection5: any;
  selectedIndex: number = 0;


  carousel: any;
  posCarousel: any;


 

  @HostListener("document:scroll")
  changeSectionSelectedByScrolling(){
   
    //section1 = whoWeAre
    //section2 = services
    //section3 = technologies
    //section4 = reviews
    //section5 = contact
    //isMenuOnDarkSurface;
  
    this.posSection1 = this.section1.getBoundingClientRect();
    this.posSection2 = this.section2.getBoundingClientRect();
    this.posSection3 = this.section3.getBoundingClientRect();
    this.posSection4 = this.section4.getBoundingClientRect();
    this.posSection5 = this.section5.getBoundingClientRect();


    this.posCarousel = this.carousel.getBoundingClientRect();
    
   var i: number;
   
  
    for(i = 0; i < this.menuElements.length; i++){
      if(i != this.selectedIndex){
        this.menuElements[i].isSelected = false;
      }else{

      }
    }

    if((this.posSection1.top>82) && this.posSection1.top<= 300){
      this.menuElements[0].isSelected = true;
      //this.menuElements[0].darkSurface = true;
      this.selectedIndex = 0;


    }else if ((this.posSection2.top>82) && this.posSection2.top<= 300){
      this.menuElements[1].isSelected = true;
      this.selectedIndex = 1;
    }else if((this.posSection3.top>82) && this.posSection3.top<= 300){
      this.menuElements[2].isSelected = true;
      this.selectedIndex = 2;
    }else if((this.posSection4.top>82) && this.posSection4.top<= 300){
      this.menuElements[3].isSelected = true;
      this.selectedIndex = 3;

    }else if((this.posSection5.top>82) && this.posSection5.top<= 300){
      this.menuElements[4].isSelected = true;
     this. selectedIndex = 4;

    }




    
    
  }

  public slides                 : Array<any> = [];
  public currentSlide           : number = 0;
  public animationSliderCounter : number = 0;

  public serviceCards           : Array<any> = [];
  public pcCarrousel            : Array<any> = [];
  //public frontendSkills         : Array<any> = [];
  //public backendSkills          : Array<any> = [];
  public experienceCases        : Array<any> = [];
  public clientList             : Array<any> = [];

  /*formBody                      : any        = {
                                                  name: "", 
                                                  phone: "", 
                                                  email: "", 
                                                  message: ""
                                                };*/



  showPrev    : boolean     = false;
  showNext    : boolean     = true;
  pcImageStep : number      = 1;

  mainAppAnimation        : string        = 'fadeInSmallUp';
  pcImageInterval        : any;

  //resize values
  mainCarrouselHeight           : number;

  // @ViewChild('mainContainer', {static: false}) carouselContainer : any

  constructor(private miRouter: Router, private phpService: ProviderPHPService) { 
    this.slides = [
      {
        source: './assets/img/newSliders/Slider1.png',
        active: false,
        type: 'image',
      
        text: `<div class="animated fadeInLeft text-align-center"><span class="fw-bold"> Somos Software, </span> Somos <span class="fw-bold">BWL </span>`,
        logo: ''
      },
      {
        source: './assets/img/newSliders/Slider2.png',
        active: false,
        type: 'image',
         text: `<div class="animated fadeInRight text-align-center"><span class="fw-bold">Desarrollamos </span>  el sistema que<br/> necesitas, como<span class="fw-bold">  lo necesitas</span></div>`,
        logo: ''
      },
      {
        source: './assets/img/newSliders/Slider3.png',
        active: false,
         
        type: 'image',
        text: `<div class="animated fadeInDown text-align-center">Despegamos <span class="fw-bold">contigo</span> para <br/> <span class="fw-bold">alcanzar</span> tus metas</div>`,
        logo: ''
      },
    ]
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
        image: './assets/img/services/creative-center.png',
        title: 'Centro creativo',
        link: 'centro-creativo'
      },
      {
        image: './assets/img/services/UX.png',
        title: 'Diseño de UX&UI',
        link: 'UX'
      }

      
    ]
    this.pcCarrousel = [
      {
        position: 1,
        image: './assets/img/mac/foto1.png',
        active: true,
      },
      {
        position: 2,
        image: './assets/img/mac/foto2.png',
        active: false,
      },
      {
        position: 3,
        image: './assets/img/mac/foto3.png',
        active: false,
      },
    ];
   
    this.experienceCases = [
      {
        title: 'Plataformas de trabajo',
        description: 'Dashboards,<br>análisis de datos y<br>flujos de negocio.',
        image: './assets/img/experience/Expe1.png',
        positionText: 'top-left',
        backgroundColor: '', 
        width: 70
      },
      {
        title: 'Integraciones',
        description: 'Ecommerce, medios<br>de pago y frameworks.',
        image: './assets/img/experience/Expe2.png',
        positionText: 'bottom-left',
        backgroundColor: 'yellow', 
        width: 30
      },
      {
        title: 'Seguridad',
        description: 'Transaccionalidad bancaria.',
        image: './assets/img/experience/Expe3.png',
        positionText: 'bottom-left',
        backgroundColor: 'red', 
        width: 30
      },
      {
        title: 'Servicios en la nube',
        description: 'Amazon AWS y Google GCP.',
        image: './assets/img/experience/Expe4.png',
        positionText: 'top-left',
        backgroundColor: '', 
        width: 70
      },
      {
        title: 'Aplicaciones móviles',
        description: 'Android, iOS, híbrido y<br>diseño UI/UX.',
        image: './assets/img/experience/Expe5.png',
        positionText: 'top-left',
        backgroundColor: '', 
        width: 50
      },
      {
        title: 'Consultoría de software',
        description: 'Equipos de trabajo y fabrica de<br>software.',
        image: './assets/img/experience/Expe6.png',
        positionText: 'bottom-left',
        backgroundColor: 'blue', 
        width: 50
      },
    ];
    this.clientList = [
      {
        title: 'Enlace: EFL 2.0',
        description: 'Plataforma de telemetría de la marca de Freightliner para monitoreo de transportes a nivel nacional.',
        extraData: 'Cuenta con una suite de aplicaciones móviles para gestión de los viajes como herramienta de trabajo para los operadores de vehículo y monitoristas de la plataforma.',
        image: './assets/img/clients/enlace.jpg'
      },
      {
        title: 'BBVA: Multipagos',
        description: 'Solución de Cobranza Integral utilizada por la totalidad de los gobiernos estatales para la recaudación de impuestos y por numerosas empresas privadas para su cobranza.',
        extraData: 'La solución abarca múltiples canales, medios de pago y funciones de valor agregado.',
        image: './assets/img/clients/bbva.png'
      },
      {
        title: 'Flap: Multikioscos',
        description: 'Solución que permite en un sólo sitio a las Entidades Gubernamentales y Empresas conciliar integralmente las operaciones de pago que sus contribuyentes/clientes realizan.',
        extraData: 'A través de los distintos puntos de recaudación/cobranza, tanto de impuestos, productos y servicios.',
        image: './assets/img/clients/flap.png'
      },
      {
        title: 'Roastbit: Plataforma de testeos',
        description: 'Sistema de testeo de plataformas web y aplicaciones móviles. Cada proyecto se reparte en versiones y pruebas generando reportes de casos exitosos y fallos.',
        extraData: 'La plataforma ofrece a sus clientes la utilidad de testeo para encontrar los fallos de un sistema como parte del proceso de calidad de software.',
        image: './assets/img/clients/atech.png'
      },
      {
        title: 'Modelo: JoyRetail',
        description: 'Plataforma de administración de tiendas de abarrotes y venta de cerveza de Grupo Modelo, que permite automatizar el proceso de pedidos, abastecimiento de tiendas y gestión de proveedores.',
        extraData: 'Optimiza los tiempos de suministro de productos de venta a cada una de ellas en diferentes puntos del Centro de Veracruz.',
        image: './assets/img/clients/modelo.png'
      },
      {
        title: 'ABSystems: 1G – One Goal',
        description: 'Aplicación móvil que permite ubicar geográficamente a empleados, proveedores, clientes, almacenes entre otros.',
        extraData: 'Además de ubicar eventos que acontecen durante su operación en cada uno de ellos como parte de la suite de aplicaciones de la plataforma 1G ERP.',
        image: './assets/img/clients/sep.png'
      }
    ]

   
  }

  response: any;
  getScrollTop() {
    setTimeout(() => window.scrollTo(0,0), 100);
  }

  navigate(itemLink: string){
    let link: string;

    link = "/pages/bwl-services/";

    link += itemLink;
    this.getScrollTop();
    this.miRouter.navigate([link]).then();
  }
  navigate2(){
    this.getScrollTop();
    this.miRouter.navigate(['/pages/about']).then();

  }

  ngOnInit(): void {
    this.startPcAnimation();
    this.resizeMainCarrousel(window.screen.height, window.screen.width);
    this.section1= document.getElementById("whoWeAre");
    this.section2 = document.getElementById("services");
    this.section3 = document.getElementById("technologies");
    this.section4 = document.getElementById("reviews");
    this.section5 = document.getElementById("contact");
    this.carousel = document.getElementById("frontpage-carousel");
  

   
  

  }

 
  
 
  sideBarNavigate(elementId: string){
    
    /*var i: number;

    for(i = 0; i < this.menuElements.length; i++){
     
      if(this.menuElements[i].section == elementId){
        this.menuElements[i].isSelected = true;
        console.log(this.menuElements[i]);
        
      }else{
        this.menuElements[i].isSelected = false;

      }
    }*/
    
      
    setTimeout(() => {
      const element = document.getElementById(elementId);
      
      const y = element.getBoundingClientRect().top + window.pageYOffset - 117;

      window.scrollTo({top: y, behavior: 'smooth'});
    }, 500)
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

  startPcAnimation() {
    this.pcImageInterval = setInterval(() => {
      this.setPcImageIndex('more', null);
    }, 5000);
  }

  setPcImageIndex(action?: string, pcImageIndex?: number) {
    clearInterval(this.pcImageInterval);

    if(action === 'less') {
      this.mainAppAnimation = 'fadeInSmallLeft';
      if(this.pcImageStep === 1)
        this.pcImageStep = 3;
      else
        this.pcImageStep--
    }
    if(action === 'more') {
      this.mainAppAnimation = 'fadeInSmallRight';
      if(this.pcImageStep === 3)
        this.pcImageStep = 1;
      else
        this.pcImageStep++;
    }
    if(pcImageIndex) {
      if (pcImageIndex > this.pcImageStep) {
        this.mainAppAnimation = 'fadeInSmallRight';
      } else {
        this.mainAppAnimation = 'fadeInSmallLeft';
      }

      this.pcImageStep = pcImageIndex;
    }

    this.startPcAnimation();
  }

  resizeMainCarrousel(innerHeight, innerWidth) {
    if (innerWidth >= 800) {
      this.mainCarrouselHeight = innerHeight;
    } else {
      this.mainCarrouselHeight = innerWidth; 
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeMainCarrousel(event.target.innerHeight, event.target.innerWidth);
  }


 

  respuesta: any;

  peticionRemota(misApellidos: string){

    const formData:FormData = new FormData();

    formData.append("apellidos", "Perez Garcia");
   


    this.phpService.imprimeAlgo(formData).subscribe
    (res => {
      console.log(res);

     
    }, err =>{
      console.log(err);
    })
    
 

  
  }

  pidePHP(){
    this.phpService.getPHP().subscribe
    (res => {
      console.log(res);
    }, err =>{
      console.log(err);
    })
  }
  
  

}
