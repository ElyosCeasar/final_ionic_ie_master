import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://final-ie-back.herokuapp.com';
  jwtHelper = new JwtHelperService();
  token = '';
  authenticationState = new BehaviorSubject(false);
  constructor(private storage: Storage, private plt: Platform, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  login(username, password) {
    const loginInfo = {
      username,
      password
    };
    this.http.post(this.url + '/api/auth/login', loginInfo).subscribe((data) => {
      console.log('tok', data);

    },
      (err) => {
        if (err.status && err.status === 200) {

          this.storage.set(TOKEN_KEY, err.error.text).then((res) => {
            const decodedToken = this.jwtHelper.decodeToken(err.error.text);
            this.token = err.error.text;
            if (decodedToken.Role !== 'admin') {
              this.authenticationState.next(true);

              // const refreshIntervalId = setInterval(() => {
              //   if (this.checkIfTokenIsExpired()) {
              //     this.logout();
              //   }
              // }, 10000);
            } else {
              console.log('admin');
            }
          });

        } else {
          console.log('err', err.error);
        }
      }
    );
  }
  logout() {
    return this.storage.remove(TOKEN_KEY).then((res) => {
      this.authenticationState.next(false);
    });
  }
  isAuthenticated() {
    return this.authenticationState.value;
  }
  checkToken() {
    return this.storage.get(TOKEN_KEY).then((res) => {
      if (res) {// and some auther check valid expire
        this.token = res;
        this.authenticationState.next(true);
      }
    });
  }
  checkIfTokenIsExpired() {
    let isExpired = false;
    return this.storage.get(TOKEN_KEY).then((token) => {
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log(decodedToken);
      const secondsSinceEpoch = Math.round(Date.now() / 1000);
      if (decodedToken.payload.exp < secondsSinceEpoch) {
        isExpired = true;
      }
      return isExpired;
    });

  }

  getRole() {
    return this.storage.get(TOKEN_KEY).then((token) => {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken.Role;
    });
  }
  getToken() {
    return this.token;
  }

}

