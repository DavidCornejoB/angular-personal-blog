import { Component } from '@angular/core';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-moviles-card',
  templateUrl: './moviles-card.component.html',
  styleUrls: ['./moviles-card.component.scss']
})
export class MovilesCardComponent {

  constructor(private habilidades: HabilidadesService)
  {}

  private iconosMoviles = this.habilidades.getMoviles();

  getIconosMoviles(){
    return this.iconosMoviles;
  }

}
