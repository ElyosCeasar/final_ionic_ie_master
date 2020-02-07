import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages: Array<{ title: string, url: string, icon: any }>;
  constructor() {
    this.pages = [{ title: 'مشاهده', url: '/menu/show', icon: 'eye' }, { title: 'خروج', url: '/', icon: 'log-out' }];
  }

  ngOnInit() {
  }

}
