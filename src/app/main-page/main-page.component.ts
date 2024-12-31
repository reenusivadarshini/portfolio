import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { SkillsComponent } from '../skills/skills.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ContactComponent,AboutComponent,HomeComponent,SkillsComponent,RouterModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

}
