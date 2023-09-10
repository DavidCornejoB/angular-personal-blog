import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hobby-card',
  templateUrl: './hobby-card.component.html',
  styleUrls: ['./hobby-card.component.scss']
})
export class HobbyCardComponent {

  @Input() imagenHobby: string = '';
  @Input() tituloHobby: string = '';
  @Input() contenidoHobby: string = '';
}
