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

interface Transaction {
  item: string;
  position: number;
  puttc: number;
  quantit?: unknown;
  cost: number;
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
  ],
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.scss'],
})
export class CaisseComponent {
  displayedColumns = ['position', 'item', 'puttc', 'quantit', 'cost'];
  numberValue: number | null = null;
  disabled: boolean = false;
  readonly: boolean = false;

  transactions: Transaction[] = [
    {position: 1, item: 'Les Hauts de Hurle-Vent...', puttc: 1.0079, quantit: 19, cost: 1203},
    {position: 2, item: 'Hauts de Hurle-Vent...', puttc: 4.0026, quantit: 10,cost: 1203},
    {position: 3, item: 'Hauts de Hurle-Vent', puttc: 6.941, quantit: 12, cost: 1203},
    {position: 4, item: 'Hauts de Hurle-Vent', puttc: 9.0122, quantit: 23, cost: 1203},
    {position: 5, item: ' Hauts de Hurle-Vent', puttc: 10.811, quantit: 23, cost: 1203},
    {position: 6, item: 'Hauts de Hurle-Vent.', puttc: 12.0107, quantit: 34, cost: 1203},
    {position: 7, item: 'Hauts de Hurle-Vent.', puttc: 14.0067, quantit: 45,cost: 1203},
    {position: 8, item: 'Hauts de Hurle-Vent.', puttc: 15.9994, quantit: 56, cost: 1203},
    {position: 9, item: 'Hauts de Hurle-Vent. ', puttc: 18.9984, quantit: 90, cost: 1203},
    {position: 10, item: 'Les Hauts de Hurle-Vent.', puttc: 20.1797, quantit: 10,cost: 1203},
  ];

  getTotalCost() {
    return this.transactions
      .map(t => t.cost)
      .reduce((acc, value) => acc + value, 0);
  }
}
