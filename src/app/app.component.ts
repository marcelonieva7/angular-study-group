import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HeaderComponent],
  template: `
    <main>
      <app-header [links]="navLinks"></app-header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
  navLinks = [
    { label: 'Inicio' },
    { label: 'Contacto' },
    { label: 'Acerca de' }
  ];

}
