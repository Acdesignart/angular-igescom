import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bgui-pagetitle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.scss'],
})
export class PagetitleComponent implements OnInit {
  @Input() breadcrumbItems: any;
  @Input() title: string | undefined;

  constructor() {}

  ngOnInit() {}
}
