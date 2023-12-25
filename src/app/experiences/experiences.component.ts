import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) { }

   ngAfterViewInit(): void {
    document.addEventListener("DOMContentLoaded", function () {
      const timelineLine = document.querySelector(".timeline-line") as HTMLElement;
      const timelineImage = document.querySelector(".timeline-image") as HTMLElement;
    
      const maxTimelineHeight =
        (document.querySelectorAll(".my-container").length) *100 ;
      window.addEventListener("scroll", () => {
        const scrollPercentage = (window.scrollY / maxTimelineHeight) *10;
        console.log(scrollPercentage)
        const adjustedPercentage = Math.min(100, scrollPercentage);
        timelineLine.style.height = `${adjustedPercentage}%`;
        timelineImage.style.top = `${adjustedPercentage}%`;
      });
    });
  }
 
  
}
