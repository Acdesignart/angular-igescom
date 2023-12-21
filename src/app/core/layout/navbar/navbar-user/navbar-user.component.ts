import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { ClickOutsideDirective } from '../../../../shared/click-outside/click-outside.directive';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bgui-navbar-user',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatRippleModule,
    ClickOutsideDirective,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.scss'],
})
export class NavbarUserComponent implements OnInit {
  isOpen!: boolean;

  constructor() {}

  ngOnInit() {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }
}
