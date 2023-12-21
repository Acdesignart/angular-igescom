import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagetitleComponent } from '../shared/ui/pagetitle/pagetitle.component';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'bgui-admin-test',
  standalone: true,
  imports: [CommonModule, PagetitleComponent, RouterOutlet],
  templateUrl: './admin-test.component.html',
  styleUrls: ['./admin-test.component.scss'],
})
export class AdminTestComponent implements OnInit {
  breadCrumbItems: Array<{}> | undefined;

  constructor() {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'Résumé Des Transactions.' },
      /* { label: 'Invoice List', active: true },*/
    ];
  }
}
