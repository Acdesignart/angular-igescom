import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'bgui-login-admin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss'],
})
export class LoginAdminComponent {
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
