import { Component } from '@angular/core';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-frontend-card',
  templateUrl: './frontend-card.component.html',
  styleUrls: ['./frontend-card.component.scss']
})
export class FrontendCardComponent {

  constructor(private habilidades: HabilidadesService)
  {}

  private iconosLenguajes = this.habilidades.getLenguajesFrontend();
  private iconosFrameworks = this.habilidades.getFrameworksFrontend();

  getIconosLenguajes(){
    return this.iconosLenguajes;
  }

  getIconosFrameworks(){
    return this.iconosFrameworks;
  }

}
