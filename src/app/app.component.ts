import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="navbar">
      <div class="logo">Amanda Ruff</div>

      <nav>
        <a routerLink="/">Home</a>
        <a routerLink="/about">About</a>
        <a routerLink="/resume">Resume</a>
        <a routerLink="/projects">Projects</a>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <p>© 2026 Amanda Ruff | Web Developer Portfolio</p>
    </footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}