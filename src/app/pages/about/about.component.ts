import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  name = 'Amanda Ruff';

  bio = `
  I am a web development student passionate about building modern and interactive web applications.
  Throughout my coursework, I have developed experience using Angular, TypeScript, Node.js, REST APIs,
  MongoDB, and Test-Driven Development.

  My journey into development began with a strong interest in technology and problem solving.
  Over time, I discovered that I enjoy creating user-friendly applications that combine functionality,
  design, and clean code practices.

  In addition to my technical education, I bring years of professional experience working in leadership,
  communication, and customer-focused environments. These experiences have strengthened my ability to
  collaborate, adapt quickly, and stay organized while solving problems under pressure.

  My long-term goal is to continue growing as a full-stack developer and contribute to meaningful,
  innovative projects that improve user experiences and business solutions.
  `;

  strengths = [
    'Angular & TypeScript Development',
    'REST API Development',
    'MongoDB & NoSQL Databases',
    'Responsive UI Design',
    'Test-Driven Development',
    'Problem Solving & Team Collaboration'
  ];
}