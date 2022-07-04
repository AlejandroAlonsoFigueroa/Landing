import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailSenderService {

  constructor(private http_client: HttpClient) { }



  pedirPHP(body: any){
    
    return this.http_client.post('http://localhost:80/documentosPHP/pruebaPHP.php', body);
    
    
  }
  

}
