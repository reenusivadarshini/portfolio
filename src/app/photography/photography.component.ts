import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [ContactComponent,RouterModule,CommonModule],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyComponent {
  images = [
    { id: 1, url: 'assets/HTVQ2656.JPG', caption: 'Tranquility' },
    { id: 2, url: 'assets/IMG_0423.JPG', caption: 'Serenity' },
    { id: 3, url: 'assets/IMG_1158.JPG', caption: 'Qutub Minar' },
    { id: 7, url: 'assets/IMG_4141.JPG', caption: 'Jaipur' },
    { id: 7, url: 'assets/IMG_2144.JPG', caption: 'Paw Paw' },
    { id: 7, url: 'assets/IMG_2254.JPG', caption: 'Pristine' },
    { id: 7, url: 'assets/IMG_1487.JPG', caption: 'Magnificent' },
    { id: 7, url: 'assets/IMG_1496.JPG', caption: 'Sacred' },
    { id: 7, url: 'assets/IMG_1730.JPG', caption: 'Picturesque' },
    { id: 7, url: 'assets/IMG_2023.JPG', caption: 'Exalted' },
    { id: 6, url: 'assets/IMG_4194.JPG', caption: 'Infinite' },
    { id: 7, url: 'assets/IMG_2128.JPG', caption: 'Mountain' },

    { id: 7, url: 'assets/IMG_2626.JPG', caption: ' Ethreal' },
    { id: 7, url: 'assets/IMG_2870.JPG', caption: 'Breathtaking' },
    { id: 7, url: 'assets/IMG_3736.JPG', caption: 'Timeless' },
    { id: 7, url: 'assets/IMG_3931.JPG', caption: 'Hawa Mahal' },
    { id: 7, url: 'assets/IMG_E1310.JPG', caption: 'Magnificent' },
    { id: 4, url: 'assets/IMG_1281.JPG', caption: 'Monumental' },
    { id: 5, url: 'assets/IMG_1355.JPG', caption: 'Mighty' },
    { id: 6, url: 'assets/IMG_1483.JPG', caption: 'Serenity' },




  ];
}
