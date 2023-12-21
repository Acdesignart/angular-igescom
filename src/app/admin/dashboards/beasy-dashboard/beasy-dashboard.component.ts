import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PagetitleComponent } from '../../../shared/ui/pagetitle/pagetitle.component';

@Component({
  selector: 'bgui-beasy-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PagetitleComponent],
  templateUrl: './beasy-dashboard.component.html',
  styleUrls: ['./beasy-dashboard.component.scss'],
})
export class BeasyDashboardComponent implements OnInit {
  breadCrumbItems: Array<{}> | undefined;

  constructor() {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'Resumé Des Transactions' },
      /* { label: 'Invoice List', active: true },*/
    ];
  }
}
