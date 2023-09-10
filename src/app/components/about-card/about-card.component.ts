import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent {

  @Input() iconoTarjeta: string = '';
  @Input() tituloTarjeta: string = '';
  @Input() descripcionTarjeta: string = '';


}
