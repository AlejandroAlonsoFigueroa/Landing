import { Component, OnInit,HostListener, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'bwl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  @Output() scrollTop =  new EventEmitter<any>()



  public pages: any=[
    {
      name :"Nosotros"
    }, 
    {
      name :"Experiencia"
    }, 
    {
      name: "Únete"
    },
    {
      name: "Servicios", 
      children: ["Equipos de trabajo", "Fábrica de software", "Transformación Digital"
    , "Plataforma Web", "Aplicaciones móviles", "Centro creativo"]

    },
    {
      name: "Política de privacidad", 
      

    }

  ];

 
  

  bwlServices = [
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

    
  
];

  public socialMedia: any = [
    {
      name : "Facebook", 
      link: "https://www.facebook.com/BWLTECHGROUP"
    }, 
    {
      name : "Linkedin", 
      link: "https://www.facebook.com/BWLTECHGROUP"
    }, 
    {
      name : "Instagram", 
      link: "https://www.facebook.com/BWLTECHGROUP"
    }
  ]
  constructor(private router : Router) { 
  
  }

  ngOnInit(): void {
    this.resizeWindow(window.screen.height, window.screen.width);
  }
  
  seeChildren(section: any) {
    section.showChildren = !section.showChildren;

    if(section.showChildren) {
      section.symbol = "-";
    } else {
      section.symbol = "+";
    }
  }

  resizeWindow(innerHeight, innerWidth) {
    if (innerWidth >= 801) {
      this.pages.forEach(item => {
        item.showChildren = true;
        item.symbol = "+";
      });
    } else {
      this.pages.forEach(item => {
        item.showChildren = false;
        item.symbol = "+";
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeWindow(event.target.innerHeight, event.target.innerWidth);
  }

  hola(name: string){
    alert(name);
  }

  navigate(scrollRef: string) {
    
    setTimeout(() => {
      const element = document.getElementById(scrollRef);
      const y = element.getBoundingClientRect().top + window.pageYOffset - 117;

      window.scrollTo({top: y, behavior: 'smooth'});
    }, 500)
    
  }

  navigateDiffPage(sourcePage: string){
    this.getScrollTop();
    var path = "/pages/bwl-services/"+sourcePage;
    console.log(path);
    //this.router.navigate[sourcePage];
    this.router.navigate([path]).then();
  }

  getScrollTop() {
    setTimeout(() => window.scrollTo(0,0), 100);
  }
  goToPrivacyPolicy(){
    this.router.navigate(["/privacy-policy"]).then();
  }

  
}