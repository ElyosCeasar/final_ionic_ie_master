import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './../../../services/app.service';

@Component({
  selector: 'app-show-specefic-form',
  templateUrl: './show-specefic-form.page.html',
  styleUrls: ['./show-specefic-form.page.scss'],
})
export class ShowSpeceficFormPage implements OnInit {
  form = [];
  id = -1;
  formTitle = '';
  constructor(private activatedRoute: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      console.log('passedId', this.id);
      this.appService.getSpeceficFormById(this.id).subscribe((data: any) => {
        console.log(data.form.fields);
        this.formTitle = data.form.title;
        this.form = data.form.fields;
      });

    });
  }

}
