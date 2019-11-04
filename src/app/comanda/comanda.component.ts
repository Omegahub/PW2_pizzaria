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
      TaxaServico : this.formBuilder.control(''),
    })
  }

}
