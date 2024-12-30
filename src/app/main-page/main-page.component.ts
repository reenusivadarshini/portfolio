import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { SkillsComponent } from '../skills/skills.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ContactComponent,AboutComponent,HomeComponent,SkillsComponent,RouterModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
