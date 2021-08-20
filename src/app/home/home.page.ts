import { Component } from '@angular/core';
import sortBy from 'sort-by'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  termoDeBusca: string;

  public veiculos;
  constructor() {
    this.veiculos=[
      {modelo:'GOL', marca:'Volkswagen', ano:2011},
      {modelo:'Voyage', marca:'Volkswagen', ano:2010},
      {modelo:'FOX', marca:'Volkswagen', ano:2008},
      {modelo:'Onix', marca:'Chevrolet', ano:2017},
      {modelo:'Palio', marca:'FIAT', ano:2011},
      {modelo:'UNO', marca:'FIAT', ano:1994},
      {modelo:'Siena', marca:'FIAT', ano:2005},
      {modelo:'Meriva', marca:'Chevrolet', ano:2013},
      {modelo:'Celta', marca:'Chevrolet', ano:2010},
      {modelo:'Toro', marca:'FIAT', ano:2021},
      {modelo:'HB20', marca:'Hyundai', ano:2019},
      {modelo:'Corsa', marca:'Chevrolet', ano:2009},
      {modelo:'Sandero', marca:'Renault', ano:2018},

    ]


  }
  listaOrdenada(){
    return this.veiculos.sort(sortBy('modelo'));
  }

}
