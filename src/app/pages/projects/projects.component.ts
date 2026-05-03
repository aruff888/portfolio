import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  course: string;
  description: string;
  technologies: string[];
  learned: string;
  images: string[];
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'RPG Character Builder',
      course: 'WEB 425 - Angular',
      description: 'A full Angular application demonstrating routing, reactive forms, authentication, and component-based architecture.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Reactive Forms', 'Routing'],
      learned: 'Through this project, I developed a strong understanding of Angular architecture, including routing, component communication, and form validation. I also applied best practices such as modular design and reusable components while building a functional and interactive user interface.',
      images: [
        '/project-rpg.png',
        '/project-createcharacter.png',
        '/project-login.png'
      ],
      link: 'https://github.com/aruff888/web-425-master'
    }
  ];
}