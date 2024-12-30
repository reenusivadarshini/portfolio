import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {


  downloadCV()
  
    {
      const link = document.createElement("a");
      link.href = "assets/Resume_Reenu_.pdf";
      link.download = "Resume_Reenu.pdf";
      link.click();
    }
  }

