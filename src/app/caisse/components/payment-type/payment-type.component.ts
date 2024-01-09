import { Component } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from '../../../shared/ui/loader/loader.component';

interface MethodePay {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'bgui-payment-type',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatDialogClose,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    NgxMaskDirective,
    ReactiveFormsModule,
    LoaderComponent,
  ],
  templateUrl: './payment-type.component.html',
  styleUrl: './payment-type.component.scss',
})
export class PaymentTypeComponent {
  methodepays: MethodePay[] = [
    { value: 'orange-money', viewValue: 'Orange Money' },
    { value: 'moovmoney', viewValue: 'Moov Money' },
    { value: 'cheque', viewValue: 'Chèque' },
  ];
}
