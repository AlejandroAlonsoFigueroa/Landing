import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailSenderService } from 'src/app/shared/services/mail-sender.service';
import { VacanciesService } from 'src/app/shared/services/vacancies-service';

interface Vacancie{
  name: string,
  description: string, 
  salary: string, 
  location: string, 
  hoursOfWork: string, 
  knowledge: string[];
  requisites: string[];
  weOffer: string[];
  link: string;
}

interface respuesta{
  code: number, 
  status: string, 
  error : string 
}

@Component({
  selector: 'bwl-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {

  
  datosEnPeticion: {
    nombre: "Alejandro", 
    Apellidos: "Alonso Figueroa"
  };
  constructor(private rutaActiva: ActivatedRoute, private myService: VacanciesService, private email_sender: MailSenderService) { }

  ngOnInit(): void {
  }

  pedirHttp(){

    this.email_sender.pedirPHP(this.datosEnPeticion).subscribe((result:any) => this.miRespuesta = result);

    console.log(this.miRespuesta);
  }



  miRespuesta: respuesta;  
  private nVacante: string  = this.rutaActiva.snapshot.params['nombreVacante'];
  oppenedVacancie:Vacancie  = this.myService.getVacancieByName(this.nVacante);

 

}
