import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  private slideIndex: number = 1;
  private slideIndex2: number = 1;
 // Next/previous controls for Slide 1
  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }
   // Thumbnail image controls for Slide 1
   currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }

  // ShowSlides for Slide 1
  private showSlides(n: number): void {
    let i: number;
    const slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides");
    const dots: HTMLCollectionOf<Element> = document.getElementsByClassName("dot");

    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
      if(slides[i])
      (slides[i] as HTMLElement).style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" act", "");
    }

    (slides[this.slideIndex - 1] as HTMLElement).style.display = "block";
    dots[this.slideIndex - 1].className += " act";
  }

  // Next/previous controls for Slide 2
  plusSlides2(n: number): void {
    this.showSlides2(this.slideIndex2 += n);
  }

  // ShowSlides for Slide 2
  private showSlides2(n: number): void {
    let i: number;
    const slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySkill");

    if (n > slides.length) { this.slideIndex2 = 1; }
    if (n < 1) { this.slideIndex2 = slides.length; }

    for (i = 0; i < slides.length; i++) {
      if(slides[i])
      (slides[i] as HTMLElement).style.display = "none";
    }
    if(slides[this.slideIndex2 - 1])
    (slides[this.slideIndex2 - 1] as HTMLElement).style.display = "flex";
  }

  ngOnInit(): void {
    
    this.showSlides(this.slideIndex);
    this.showSlides2(this.slideIndex2);
  }
}