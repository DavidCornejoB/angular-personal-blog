import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-image',
  templateUrl: './icon-image.component.html',
  styleUrls: ['./icon-image.component.scss']
})
export class IconImageComponent {

  @Input() iconPath: string = '';
  @Input() iconDesc: string = '';

}
