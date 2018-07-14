import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-bill-gen',
  templateUrl: './bill-gen.component.html',
  styleUrls: ['./bill-gen.component.css']
})
export class BillGenComponent implements OnInit {

items: MenuItem[];

activeItem: MenuItem;

ngOnInit() {
  this.items = [
    {label: 'Logout ', routerLink: ['/login']}
  ];

  this.activeItem = this.items[2];
}
}
