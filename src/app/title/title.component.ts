import { Component } from '@angular/core';
import { UnderlineDirective } from '../directives/underline/underline.directive';

@Component({
  selector: 'app-title',
  imports: [UnderlineDirective],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  title : string = "Coucou je suis le titre";
}
