import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages: Array<{ title: string, url: string, icon: any }>;
  constructor(private authService: AuthService) {
    this.pages = [{ title: 'مشاهده', url: '/main-app/menu/show', icon: 'eye' }, { title: 'خروج', url: '/', icon: 'log-out' }];
  }

  ngOnInit() {
  }
  logout() {
    this.authService.logout();
  }

}
