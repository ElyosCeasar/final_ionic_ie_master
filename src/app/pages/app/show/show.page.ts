import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { AppService } from './../../../services/app.service';
import { FormForShowDto } from './../../model/formForShowDto';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  forms: FormForShowDto[] = [];
  constructor(private authService: AuthService, private router: Router, private appService: AppService) { }

  ngOnInit() {
    this.appService.getAllForms().subscribe((data) => {
      console.log('forms', data.forms);
      this.forms = data.forms;
    });

    // this.forms = data;


  }

}
