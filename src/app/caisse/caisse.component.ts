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

  transactions: Transaction[] = [];

  getTotalCost() {
    return this.transactions
      .map(t => t.cost)
      .reduce((acc, value) => acc + value, 0);
  }
}
