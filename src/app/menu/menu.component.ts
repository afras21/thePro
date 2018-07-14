import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  items: MenuItem[];

  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      {label: 'Manage Item ', routerLink: ['/ManagePro']},
      {label: 'Manage staff', routerLink: ['/Staff']},
      {label: 'Customer stats'},
      {label: 'Product stats'},
      {label: 'Logout', routerLink: ['/login']}
    ];

    this.activeItem = this.items[2];
  }
}
