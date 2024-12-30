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
    { id: 1, url: 'assets/HTVQ2656.JPG', caption: 'Photo 1' },
    { id: 2, url: 'assets/IMG_0423.JPG', caption: 'Photo 2' },
    { id: 3, url: 'assets/IMG_1158.JPG', caption: 'Photo 3' },
    { id: 7, url: 'assets/IMG_4141.JPG', caption: 'Photo 7' },
    { id: 7, url: 'assets/IMG_2144.JPG', caption: 'Photo 7' },
    { id: 7, url: 'assets/IMG_2254.JPG', caption: 'Photo 7' },
    { id: 7, url: 'assets/IMG_1487.JPG', caption: 'Photo 7' },
    { id: 7, url: 'assets/IMG_1496.JPG', caption: 'Photo 7' },
    { id: 7, url: 'assets/IMG_1730.JPG', caption: 'Photo 7' },
    { id: 7, url: 'assets/IMG_2023.JPG', caption: 'Photo 7' },
    { id: 7, url: 'assets/IMG_2128.JPG', caption: 'Photo 7' },
    { id: 6, url: 'assets/IMG_4194.JPG', caption: 'Photo 6' },

    { id: 7, url: 'assets/IMG_2626.JPG', caption: 'Photo 7' },
    { id: 7, url: 'assets/IMG_2870.JPG', caption: 'Photo 7' },
    { id: 7, url: 'assets/IMG_3736.JPG', caption: 'Photo 7' },
    { id: 7, url: 'assets/IMG_3931.JPG', caption: 'Photo 7' },
    { id: 7, url: 'assets/IMG_E1310.JPG', caption: 'Photo 7' },
    { id: 4, url: 'assets/IMG_1281.JPG', caption: 'Photo 4' },
    { id: 5, url: 'assets/IMG_1355.JPG', caption: 'Photo 5' },
    { id: 6, url: 'assets/IMG_1483.JPG', caption: 'Photo 6' },




  ];
}
