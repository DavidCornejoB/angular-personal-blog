import { Component } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent {

  textoBienvenida: string | undefined = 'Bienvenido a Mi Blog';
  textoNombre: string | undefined = 'David Cornejo B';
  textoDescripcion: string | undefined = 'Soy Ingeniero en Ciencias de la Computación';

}
