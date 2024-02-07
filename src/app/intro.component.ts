import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styles: 'img {width:44.45px; height:37.80px;}'
})
export class IntroComponent {
  pageTitle = 'Introduction';
}
