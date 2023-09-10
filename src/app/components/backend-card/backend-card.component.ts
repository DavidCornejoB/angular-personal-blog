import { Component } from '@angular/core';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-backend-card',
  templateUrl: './backend-card.component.html',
  styleUrls: ['./backend-card.component.scss']
})
export class BackendCardComponent {

  constructor(private habilidades: HabilidadesService)
  {}

  private iconosLenguajes = this.habilidades.getLenguajesBackend();
  private iconosFrameworks = this.habilidades.getFrameworksBackend();

  getIconosLenguajes(){
    return this.iconosLenguajes;
  }

  getIconosFrameworks(){
    return this.iconosFrameworks;
  }

}
