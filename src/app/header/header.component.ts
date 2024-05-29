import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      <nav>
        <ul>
          <li *ngFor="let link of links">
            <a class="nav-link">{{ link.label }}</a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() links: { label: string }[] = [];
}
