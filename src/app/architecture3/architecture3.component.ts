import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../services/data.service';
import { NavbarComponent } from '../core/layout/navbar/navbar.component';
import { NavbarUserComponent } from '../core/layout/navbar/navbar-user/navbar-user.component';
import { LoaderComponent } from '../shared/ui/loader/loader.component';

@Component({
  selector: 'bgui-architecture3',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    NavbarComponent,
    NavbarUserComponent,
    LoaderComponent,
  ],
  templateUrl: './architecture3.component.html',
  styleUrls: ['./architecture3.component.scss'],
})
export class Architecture3Component implements OnInit {
  readonly salutation = inject(DataService).getMessage();

  ngOnInit(): void {
    //...
  }
}
