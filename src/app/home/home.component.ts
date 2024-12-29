import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  text = 'This is Reenu Sivadarshini M!';
  displayText = '';
  currentIndex = 0;
  typingSpeed = 100; // Delay between each character
  isTyping = true;

  ngOnInit(): void {
    this.typeText();
  }

  typeText() {
    if (this.currentIndex < this.text.length) {
      this.displayText += this.text[this.currentIndex];
      this.currentIndex++;

      setTimeout(() => {
        this.typeText(); // Continue typing after a delay
      }, this.typingSpeed);
    } else {
      setTimeout(() => this.deleteText(), 1000); // Wait before deleting
    }
  }

  deleteText() {
    if (this.currentIndex > 0) {
      this.displayText = this.displayText.slice(0, -1);
      this.currentIndex--;

      setTimeout(() => {
        this.deleteText(); // Continue deleting after a delay
      }, this.typingSpeed);
    } else {
      setTimeout(() => this.typeText(), 1000); // Wait before starting to type again
    }
  }

  downloadCV()
  {
      const link = document.createElement('a');
      link.href = 'assets/Resume_Reenu_.pdf'; // Correct path
      link.download = 'Resume.pdf'; 
      link.click();
    } 

    getRandomAngle(): string {
      return `${Math.random() * 10 - 5}deg`;
    }
    

  strips1 = [
    [
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbltQbi3ENubKbN2XcfZt-CSkWJz3nGbkeFw&s', alt: 'Photo 1' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4wIkyeRKBEUKySvWKVE6gPUvXvyzIEclzw&s', alt: 'Photo 1' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlCtZi7DlNSRqPNoth30U-wiYESW7HWzU5w&s', alt: 'Photo 3' },     
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPphBaXNTJ0LiLtMF8QCAiny2VoprZ88szJA&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6eL1BU9AN8hM_hb8N5JZy5kRBEmsVnVT_Hw&s', alt: 'Photo 6' },  
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTB_nGOzR28YzVty0z1l7nE836nR7oXCFrg&s', alt: 'Photo 3' },     
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0TUAUKB7RH8smWnBJwTDbh33RLTLVGd8dg&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3bf229WFd_j6Lf_QgAeJxFJM4-hRauEBzg&s', alt: 'Photo 2' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1algCxzhfPNQPKuHMGu1LhxKZKHO3AqndBw&s', alt: 'Photo 1' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpsylYicMuU08Rk4h9gi5Rb7o0iDQMy8A7w&s', alt: 'Photo 5' }, 
    ]
  
  ];
  strips2 = [
    [
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9LuTRVxCBZXXCRIaVjNCjA-bUVsq9HJmKDw&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8uaXLeOrSLcw64mh3pAVWUDEYGvWbUhbUdQ&s', alt: 'Photo 2' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbltQbi3ENubKbN2XcfZt-CSkWJz3nGbkeFw&s', alt: 'Photo 3' },     
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVkoVvZeZY476vmZYpAigqYw04y5-o6GxLw&s', alt: 'Photo 2' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlCtZi7DlNSRqPNoth30U-wiYESW7HWzU5w&s', alt: 'Photo 3' },     
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCXEuTrMLKZATvej9ih7pZfwAdGkwE9ntow&s', alt: 'Photo 3' },     
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKD1WnLCNesDsNCd5IbtclS14mQFz38k68A&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1algCxzhfPNQPKuHMGu1LhxKZKHO3AqndBw&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbltQbi3ENubKbN2XcfZt-CSkWJz3nGbkeFw&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTB_nGOzR28YzVty0z1l7nE836nR7oXCFrg&s', alt: 'Photo 6' },
   
    ]
  ];
  strips3 = [
    [
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4wIkyeRKBEUKySvWKVE6gPUvXvyzIEclzw&s', alt: 'Photo 1' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8-f78HEF-_RTSTX70ND5khhwgX0hVovK_A&s', alt: 'Photo 2' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTB_nGOzR28YzVty0z1l7nE836nR7oXCFrg&s', alt: 'Photo 1' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdvOkel_gi2LS80y0zO4LoI5HAAI6BvzE98A&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbltQbi3ENubKbN2XcfZt-CSkWJz3nGbkeFw&s', alt: 'Photo 6' },  
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKVTzTHnTdMO6xLQ0LNv6EpygM2xrlq9L7w&s', alt: 'Photo 1' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrlKbR-COi-IdtnBtwEorgBC78dT3B4hq0w&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6eL1BU9AN8hM_hb8N5JZy5kRBEmsVnVT_Hw&s', alt: 'Photo 2' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPphBaXNTJ0LiLtMF8QCAiny2VoprZ88szJA&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlCtZi7DlNSRqPNoth30U-wiYESW7HWzU5w&s', alt: 'Photo 3' },     
   
    ]
  ];
  strips4 = [
    [
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdulxRZfn1sf7oiZKzOacBeGLaVOtYpY7mA&s', alt: 'Photo 1' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKD1WnLCNesDsNCd5IbtclS14mQFz38k68A&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1algCxzhfPNQPKuHMGu1LhxKZKHO3AqndBw&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4wIkyeRKBEUKySvWKVE6gPUvXvyzIEclzw&s', alt: 'Photo 1' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQH_tHufI2VNtAjhUOveAYOQyyOx-HgSLBkg&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFojpVa1yir1bUa1yqQx4a8LfWx49IM-zvcg&s', alt: 'Photo 3' },     
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlCtZi7DlNSRqPNoth30U-wiYESW7HWzU5w&s', alt: 'Photo 3' },     
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5a7e7vP0XDZ485fUEz1EBhxT826_BOhdsHA&s', alt: 'Photo 2' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3bf229WFd_j6Lf_QgAeJxFJM4-hRauEBzg&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9LuTRVxCBZXXCRIaVjNCjA-bUVsq9HJmKDw&s', alt: 'Photo 6' },
    ]
  ];

  strips5 = [
    [
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTB_nGOzR28YzVty0z1l7nE836nR7oXCFrg&s', alt: 'Photo 1' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdvOkel_gi2LS80y0zO4LoI5HAAI6BvzE98A&s ', alt: 'Photo 2' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4wIkyeRKBEUKySvWKVE6gPUvXvyzIEclzw&s', alt: 'Photo 1' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3bf229WFd_j6Lf_QgAeJxFJM4-hRauEBzg&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTB_nGOzR28YzVty0z1l7nE836nR7oXCFrg&s', alt: 'Photo 1' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7zeEJHs08u2dDy9U922JjSDdHHDVZgj03Ag&s', alt: 'Photo 3' },     
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAS9FHUHUU227nExCRC3gIK73AMWq21pzqw&s', alt: 'Photo 2' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9q7yr-Ud5En2Xz3fqegi1i0tVvG02sqRtw&s', alt: 'Photo 6' },      
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1algCxzhfPNQPKuHMGu1LhxKZKHO3AqndBw&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQH_tHufI2VNtAjhUOveAYOQyyOx-HgSLBkg&s', alt: 'Photo 5' },
    ]
  ];
  strips6 = [
    [
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0P4Mec6Gbx7TigB3y0Y4nHX-nCYbMhi6-ow&s', alt: 'Photo 1' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6eL1BU9AN8hM_hb8N5JZy5kRBEmsVnVT_Hw&s', alt: 'Photo 2' },
      { src: 'https://via.placeholder.com/100x120', alt: 'Photo 3' },     
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4wIkyeRKBEUKySvWKVE6gPUvXvyzIEclzw&s', alt: 'Photo 1' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPphBaXNTJ0LiLtMF8QCAiny2VoprZ88szJA&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKD1WnLCNesDsNCd5IbtclS14mQFz38k68A&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQH_tHufI2VNtAjhUOveAYOQyyOx-HgSLBkg&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlCtZi7DlNSRqPNoth30U-wiYESW7HWzU5w&s', alt: 'Photo 3' },     
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1algCxzhfPNQPKuHMGu1LhxKZKHO3AqndBw&s', alt: 'Photo 5' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTB_nGOzR28YzVty0z1l7nE836nR7oXCFrg&s', alt: 'Photo 1' },
    ]
  ];


  
}

  
