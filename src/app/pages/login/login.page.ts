import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';
  constructor(private authService: AuthService, private router: Router,private loadingController: LoadingController) { }

  ngOnInit() {
  }
  login() {
    console.log("lg info", this.username, this.password);

    this.authService.login(this.username, this.password);
    this.presentLoading() ;

  }
 async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'لطفا صبر کنید',
      duration: 4000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

}
