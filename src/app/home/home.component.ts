import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const textWrapper = document.querySelector('.hello');

    if (textWrapper && textWrapper.textContent) {
      const textNodes = Array.from(textWrapper.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
      textNodes.forEach(node => {
        const characters = node.textContent?.split('');
        if (characters) {
          const wrappedText = characters.map(char => `<span class='letter'>${char}</span>`).join('');
          const parsedNodes = new DOMParser().parseFromString(wrappedText, 'text/html').body.childNodes;
          node.replaceWith(...Array.from(parsedNodes));
        }
      });
      anime.timeline({ loop: true })
        .add({
          targets: '.hello .letter',
          scale: [4, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 950,
          delay: (el: any, i: number) => 70 * i
        }).add({
          targets: '.hello',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }
  }
}
