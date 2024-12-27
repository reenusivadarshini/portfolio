import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  programmingSkills = [
    { name: 'Angular', rating: 4 },
    { name: 'Spring Boot', rating: 2.5 },
    { name: 'Python', rating: 4 },
    { name: 'Machine Learning', rating: 3 },
    { name: 'C Programming', rating: 4 },
    { name: 'SQL', rating: 3 }
  ];

  softSkills = ['Communication', 'Teamwork', 'Leadership', 'Adaptability', 'Resilience'];

  stars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }
}
