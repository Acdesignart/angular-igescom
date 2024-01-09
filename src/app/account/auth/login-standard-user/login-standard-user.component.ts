import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarouselComponent } from '../../../shared/carousel/carousel.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bgui-login-standard-user',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    RouterLink,
  ],
  templateUrl: './login-standard-user.component.html',
  styleUrls: ['./login-standard-user.component.scss'],
})
export class LoginStandardUserComponent implements OnInit {
  images = [
    {
      imageSrc: './assets/images/carousel-auth/orange-with-variant.png',
      imageAlt: 'nature1',
    },
    {
      imageSrc: './assets/images/carousel-auth/silver-modern-with-variant.png',
      imageAlt: 'nature1',
    },
  ];

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Impossible de trouver votre compte Beasy';
    }

    return this.email.hasError('email') ? 'Adresse e-mail non valide' : '';
  }

  hide = true;
  isActive = false;

  constructor() {
    //...
  }

  ngOnInit(): void {
    //...
  }
}
