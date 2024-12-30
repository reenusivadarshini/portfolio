import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [ContactComponent,RouterModule],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyComponent {

}
