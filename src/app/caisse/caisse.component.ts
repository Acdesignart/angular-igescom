import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { StockProductsTableComponent } from './components/stock-products-table/stock-products-table.component';
import { CategoriesChartComponent } from './components/categories-chart/categories-chart.component';
import { NavbarComponent } from '../core/layout/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SimplebarAngularModule } from 'simplebar-angular';
import { MatInputModule } from '@angular/material/input';
import { NgxMatNumberInputSpinnerModule } from 'ngx-mat-number-input-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentTypeComponent } from './components/payment-type/payment-type.component';

interface Transaction {
  position: number;
  codeItem: number;
  item: string;
  puttc: number;
  quantit?: unknown;
  discount?: unknown | number;
  cost: number;
  action: unknown;
}

@Component({
  selector: 'bgui-caisse',
  standalone: true,
  imports: [
    CommonModule,
    StockProductsTableComponent,
    CategoriesChartComponent,
    NavbarComponent,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatBadgeModule,
    MatTableModule,
    NgScrollbarModule,
    SimplebarAngularModule,
    CurrencyPipe,
    MatInputModule,
    NgxMatNumberInputSpinnerModule,
    MatRippleModule,
  ],
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.scss'],
})
export class CaisseComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(PaymentTypeComponent, {
      width: '920px',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: true,
    });
  }

  displayedColumns = [
    'position',
    'codeItem',
    'item',
    'puttc',
    'quantit',
    'discount',
    'cost',
    'action',
  ];
  numberValue: number | null = null;
  disabled: boolean = false;
  readonly: boolean = false;

  transactions: Transaction[] = [
    {
      position: 1,
      codeItem: 90283,
      item: 'Les Hauts de Hurle-Vent...',
      puttc: 1.0079,
      quantit: 19,
      discount: '',
      cost: 1203,
      action: '',
    },
    {
      position: 2,
      codeItem: 90283,
      item: 'Hauts de Hurle-Vent...',
      puttc: 4.0026,
      quantit: 10,
      discount: '',
      cost: 1203,
      action: '',
    },
    {
      position: 3,
      codeItem: 90283,
      item: 'Hauts de Hurle-Vent',
      puttc: 6.941,
      quantit: 12,
      discount: '',
      cost: 1203,
      action: '',
    },
    {
      position: 4,
      codeItem: 90283,
      item: 'Hauts de Hurle-Vent',
      puttc: 9.0122,
      quantit: 23,
      discount: '',
      cost: 1203,
      action: '',
    },
    {
      position: 5,
      codeItem: 90283,
      item: ' Hauts de Hurle-Vent',
      puttc: 10.811,
      quantit: 23,
      discount: '',
      cost: 1203,
      action: '',
    },
    {
      position: 6,
      codeItem: 90283,
      item: 'Hauts de Hurle-Vent.',
      puttc: 12.0107,
      quantit: 34,
      discount: '',
      cost: 1203,
      action: '',
    },
    {
      position: 7,
      codeItem: 92083,
      item: 'Hauts de Hurle-Vent.',
      puttc: 14.0067,
      quantit: 45,
      discount: '',
      cost: 1203,
      action: '',
    },
    {
      position: 8,
      codeItem: 90283,
      item: 'Hauts de Hurle-Vent.',
      puttc: 15.9994,
      quantit: 56,
      discount: '',
      cost: 1203,
      action: '',
    },
    {
      position: 9,
      codeItem: 92083,
      item: 'Hauts de Hurle-Vent. ',
      puttc: 18.9984,
      quantit: 90,
      discount: '',
      cost: 1203,
      action: '',
    },
    {
      position: 10,
      codeItem: 92083,
      item: 'Les Hauts de Hurle-Vent.',
      puttc: 20.1797,
      quantit: 10,
      discount: '',
      cost: 1203,
      action: '',
    },
  ];

  getTotalCost() {
    return this.transactions
      .map(t => t.cost)
      .reduce((acc, value) => acc + value, 0);
  }
  centered = false;
}
