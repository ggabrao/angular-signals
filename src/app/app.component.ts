import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgbNavModule, NgbCollapseModule],
  templateUrl: './app.component.html',
  styles: `.navbar-light .navbar-nav .nav-link.active {color: blue;font-weight: 500;}`
})
export class AppComponent {
  title = 'Signals & RxJS';
  isMenuCollapsed = true;
}
