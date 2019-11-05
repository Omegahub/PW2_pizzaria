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
    let vlConsumo: number =  (vlChopp + vlPizza + vlRecheio);
    let TaxaServico:boolean = this.formcomanda.value.TaxaServico;
    let vlTaxaServico: number = (vlChopp + vlPizza + vlRecheio) * 0.1;
    let vlTotalTaxa: number =  (vlChopp + vlPizza + vlRecheio + vlTaxaServico);
    let vlTotal: number =  (vlChopp + vlPizza + vlRecheio + vlTaxaServico) / vlPessoas;
    let vlTotalstaxa: number =  (vlChopp + vlPizza + vlRecheio) / vlPessoas;
    if(TaxaServico == true)
    {
      alert("Consumo :  " + vlConsumo.toFixed(2) + 
      " \nServiços :  "   + vlTaxaServico.toFixed(2) + 
       "\nTotal com taxa :  " + vlTotalTaxa.toFixed(2) +
       "\nPor pessoa :   "  + vlTotal.toFixed(2));
    }
    else
    {
      alert("Consumo :  " + vlConsumo.toFixed(2) + 
      "\nServiços :  "   + 0 +
       "\nPor pessoa :  "  + vlTotalstaxa.toFixed(2));
    }
  }
}
