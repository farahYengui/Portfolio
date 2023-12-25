import { Component, HostListener, OnInit } from '@angular/core';
import {  Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators'; 
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  currentRoute!: string;
  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.url;
    });
  }

navigateTo(route: string): void {
  this.router.navigate(['/'+route]).then(() => {
    setTimeout(() => {
      const element = document.getElementById(route);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
  }, 100);
  
  });
}
isVisible: boolean = true;

  @HostListener('window:resize', [])
  onResize() {
    this.isVisible = window.innerWidth >= 760;
  }

}
