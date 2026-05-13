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

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Amanda Ruff</h3>
          <p>Web Development Student & Aspiring Full-Stack Developer</p>
        </div>

        <div class="footer-section">
          <h3>Contact</h3>
          <p>
            Email:
            <a href="mailto:forchn8111@gmail.com">
              forchn8111&#64;gmail.com
            </a>
          </p>

          <a href="https://github.com/aruff888" target="_blank">
            GitHub Profile
          </a>
        </div>

        <div class="footer-section">
          <h3>Portfolio</h3>
          <p>Built with Angular, TypeScript, and responsive design principles.</p>
        </div>
      </div>

      <div class="footer-bottom">
        © 2026 Amanda Ruff | Portfolio Project
      </div>
    </footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}