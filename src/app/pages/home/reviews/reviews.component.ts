import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwl-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  clicksDados: number = 0;
  vectorCajas: any;
  indiceCabeza:number = 0;
  nCajas: number = 9;
  cajasPasadas: number = 0;
  masClicks: number = 0;


  displaceBox(){
    this.clicksDados ++;
    var i;
                
               

    this.vectorCajas[this.indiceCabeza].style.transform = `translateX(${((this.nCajas-1)-this.indiceCabeza)*448 + 20}px)`;

    this.indiceCabeza ++;
    this.cajasPasadas ++;

    for( i = this.cajasPasadas; i < this.vectorCajas.length; i++){
      this.vectorCajas[i].style.transform = `translateX(-${448*this.clicksDados}px)`;
    }

    for (i = 0; i < this.indiceCabeza-1; i++){
      this. vectorCajas[i].style.transform =  `translate(${(((this.nCajas-1)-i)*448 + 20) - ((this.masClicks-i) * 448)}px, 0px)`;
    }
                this.masClicks++;
                    if(this.clicksDados == 9){
                        this.clicksDados = 0;
                    
                        this.indiceCabeza = 0;
                        this.nCajas = 9;
                        this.cajasPasadas = 0;
                       this.masClicks = 0;
                }
  }

  constructor() { }

  ngOnInit(): void {
    this.vectorCajas= document.querySelectorAll(".caja");
    console.log(this.vectorCajas);
  }

}
