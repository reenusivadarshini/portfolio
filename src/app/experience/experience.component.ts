import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ContactComponent,RouterModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

}
