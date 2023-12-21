import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SimplebarAngularModule } from 'simplebar-angular';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { navbarData } from './nav-data';

@Component({
  selector: 'bgui-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    SimplebarAngularModule,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  menuCompact = false;
  actionMenuCompact() {
    this.menuCompact = !this.menuCompact;
  }

  protected readonly navbarData = navbarData;
}
