import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'has-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {
  formcomanda: FormGroup;

  constructor(public formBuilder: FormBuilder) { }


  ngOnInit() {
    this.formcomanda = this.formBuilder.group({
      Chopp : this.formBuilder.control(''),
      Pizza : this.formBuilder.control(''),
      Recheio : this.formBuilder.control(''),
      Pessoas : this.formBuilder.control(''),
      TaxaServico : this.formBuilder.control(false)
    })
  }

  onProcessar(){
    let vlChopp:number = this.formcomanda.value.Chopp * 7.30;
    let vlPizza:number = this.formcomanda.value.Pizza * 31.50;
    let vlRecheio:number = this.formcomanda.value.Recheio * 5.90;
    let vlPessoas:number = this.formcomanda.value.Pessoas;
    let vlTotal: number =  (vlChopp + vlPizza + vlRecheio) / vlPessoas;
    let vlConsumo: number =  (vlChopp + vlPizza + vlRecheio);
    let TaxaServico:boolean = this.formcomanda.value.TaxaServico;
    let vlTaxaServico: number = (vlChopp + vlPizza + vlRecheio) / vlPessoas * 0.1;
    let vlTotalTaxa: number =  (vlChopp + vlPizza + vlRecheio + vlTaxaServico) / vlPessoas;

    if(TaxaServico == true)
    {
      alert("Consumo : " + vlConsumo + 
      " \n Serviços : " + vlTaxaServico + 
       "\n Total " + vlTotalTaxa +
       "\n Por pessoa:" + vlTotal   );
    }
    else
    {
      alert("Valor total : " + vlTotal);
    }



  }
}
