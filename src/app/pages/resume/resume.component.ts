import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  skills = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Node.js',
    'Express',
    'MongoDB',
    'GitHub',
    'Test-Driven Development'
  ];

  education = [
    {
      school: 'Bellevue University',
      program: 'Web Development Program',
      details: 'Coursework focused on Angular, Node.js, REST APIs, MongoDB, GitHub, CI/CD, and software testing.'
    }
  ];

  experience = [
    {
      title: 'Web Development Coursework Projects',
      details: 'Built responsive web applications, tested Angular components, created REST APIs, and practiced version control using GitHub.'
    }
  ];

  certifications = [
    'Coursework in Angular Development',
    'Coursework in REST API Development',
    'Coursework in NoSQL and MongoDB'
  ];
}