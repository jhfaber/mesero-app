import { Component, OnInit } from '@angular/core';
import {Plato} from '../../_model/plato';
import {PlatoService} from '../../_service/plato.service';

@Component({
  selector: 'app-plato-lista',
  templateUrl: './plato-lista.component.html',
  styleUrls: ['./plato-lista.component.css']
})
export class PlatoListaComponent implements OnInit {
  platos: Plato[];
  
  constructor(private platoService: PlatoService) { }

  ngOnInit() {
    this.platos = this.platoService.getPlatos();
  }


}
