import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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
    
  }
}