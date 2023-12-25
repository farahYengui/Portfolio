import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{
  isVisible: boolean = false;
  isFooterEnlarged: boolean = false;
  footerHeight: string = '80px';
  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.isVisible = scrollPosition > 300;
    this.isFooterEnlarged = scrollPosition === documentHeight;
    this.footerHeight = this.isFooterEnlarged ? '190px' : '80px';
  }
}
