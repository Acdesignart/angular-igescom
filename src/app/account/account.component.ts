import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'bgui-account',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './account.component.html',
})
export class AccountComponent {}
