import { Component, OnInit } from '@angular/core';
import { ProviderPHPService } from 'src/app/shared/services/provider-php.service';

@Component({
  selector: 'bwl-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formBody                      : any        = {
    name: "", 
    phone: "", 
    email: "", 
    message: "", 

    nameError: false, 
    phoneError: false, 
    emailError: false,
    messageError: false 
  };

  


  saludar(){
    alert("Hola");
  }
  constructor(private phpService: ProviderPHPService) { 

  }

  ngOnInit(): void {
  }


  buttonPressed(){
    const formData:FormData = new FormData();

    formData.append("name", this.formBody.name);
    /*formData.append("telephone", this.formBody.phone);
    formData.append("email", this.formBody.email);
    formData.append("message", this.formBody.message);*/
   


    this.phpService.imprimeAlgo(formData).subscribe
    (res => {
      console.log(res);

     
    }, err =>{
      console.log(err);
    })
    

    console.log(this.formBody);
  }
 


  validateFields(){

    const pEmail=  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const pCellNum=  /^\d{10}$/;

    this.formBody.nameError= true;
    this.formBody.phoneError= true;
    this.formBody.emailError= true;
    this.formBody.messageError= true;


    if(this.formBody.name === ""){

      this.formBody.nameError = true;
    }else{
      this.formBody.nameError =false;
    }

    if(this.formBody.message === ""){
      this.formBody.messageError =true;
    }else{
      this.formBody.messageError = false;
    }

    if(!pEmail.test(this.formBody.email)){
      this.formBody.emailError = true;
      
    }else{
      this.formBody.emailError = false;
    }

    if(!pCellNum.test(this.formBody.phone)){
      this.formBody.phoneError = true;

    }else{
      this.formBody.phoneError = false;
    }
   

    if(this.formBody.phoneError === false &&  
      this.formBody.emailError === false &&  this.formBody.messageError === false
      &&  this.formBody.nameError ===false ){
      alert("El correo se enviará");
    }else{

    }


  }

}
