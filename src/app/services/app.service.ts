import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { AuthService } from './auth.service';
import { Subscriber, Observable } from 'rxjs';
import { FormForShowDto } from './../pages/model/formForShowDto';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = 'https://final-ie-back.herokuapp.com';
  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllForms(): Observable<any> {

    const token = this.authService.getToken();
    // tslint:disable-next-line:variable-name
    const headers_object = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    const httpOptions = {
      headers: headers_object
    };
    return this.http.get(this.url + '/api/forms', httpOptions);
  }
}
