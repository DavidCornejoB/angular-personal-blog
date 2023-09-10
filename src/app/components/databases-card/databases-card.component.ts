import { Component } from '@angular/core';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-databases-card',
  templateUrl: './databases-card.component.html',
  styleUrls: ['./databases-card.component.scss']
})
export class DatabasesCardComponent {

  constructor(private habilidades: HabilidadesService)
  {}

  private iconosBases = this.habilidades.getBases();

  getIconosBases(){
    return this.iconosBases;
  }

}
