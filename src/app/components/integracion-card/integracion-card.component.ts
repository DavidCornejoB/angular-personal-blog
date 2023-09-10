import { Component } from '@angular/core';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-integracion-card',
  templateUrl: './integracion-card.component.html',
  styleUrls: ['./integracion-card.component.scss']
})
export class IntegracionCardComponent {

  constructor(private habilidades: HabilidadesService)
  {}

  private iconosIntegracion = this.habilidades.getIntegracion();

  getIconosIntegracion(){
    return this.iconosIntegracion;
  }

}
