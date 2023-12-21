import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'bgui-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  showHeader: boolean = true;

  constructor(private router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.showHeader = !(val.url == '/' || val.url == '/caisse');
        this.menuCompact = val.url == '/' || val.url == '/caisse';
      }
    });
  }

  menuCompact = false;

  actionMenuCompact() {
    this.menuCompact = !this.menuCompact;
  }
}
