import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name = 'Amanda Ruff';

  bucketList = [
    'Become a professional full-stack developer',
    'Build and deploy a polished web application',
    'Continue strengthening my Angular and TypeScript skills',
    'Create projects that solve real-world problems',
    'Keep learning and growing in the technology field'
  ];
}