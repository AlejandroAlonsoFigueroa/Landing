import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwl-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  public backendSkills          : Array<any> = [];
  public frontendSkills         : Array<any> = [];

  constructor() { 
    this.backendSkills = [
      {
        icon: 'e908',
        color: 'red',
        description: 'Aplicaciones web basadas en tecnologías Java, Node.'
      },
      {
        icon: 'e909',
        color: 'yellow',
        description: 'Frameworks de trabajo como Spring.'
      },
      {
        icon: 'e90a',
        color: 'blue',
        description: 'Modelado de bases de datos relacionales y no relacionales.'
      },
      {
        icon: 'e90b',
        color: 'red',
        description: 'Servicios en la nube de Amazon AWS y Google Cloud Platform.'
      },
      {
        icon: 'e90c',
        color: 'yellow',
        description: 'Integración con aplicaciones móviles.'
      }
    ];
    this.frontendSkills = [
      {
        icon: 'e909',
        color: 'blue',
        description: 'Aplicaciones basadas en HTML, Angular, React, JavaScript, typeScript.'
      },
      {
        icon: 'e904',
        color: 'red',
        description: 'Diseño e implementación de Dashboards.'
      },
      {
        icon: 'e905',
        color: 'yellow',
        description: 'Diseño UI/UX en aplicaciones web.'
      },
      {
        icon: 'e906',
        color: 'blue',
        description: 'Manejo de mapas, gráficas, notificaciones y elementos audiovisuales.'
      },
      {
        icon: 'e907',
        color: 'red',
        description: 'Aplicaciones Cross Platform utilizando Electron, React, Native, Ionic, y Flutter.'
      }
    ];
  }

  ngOnInit(): void {
  }

}
