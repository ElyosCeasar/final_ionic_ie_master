import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from './../../../services/app.service';
import { MapComponent } from './../../../components/map/map.component';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-show-specefic-form',
  templateUrl: './show-specefic-form.page.html',
  styleUrls: ['./show-specefic-form.page.scss'],
})
export class ShowSpeceficFormPage implements OnInit {
  form = [];
  answers = [];
  placesAnswers = [];
  id = -1;
  formTitle = '';
  @ViewChildren(MapComponent) maps !: QueryList<MapComponent>;
  constructor(private activatedRoute: ActivatedRoute, private appService: AppService, private storage: Storage, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      console.log('passedId', this.id);
      this.appService.getSpeceficFormById(this.id).subscribe((data: any) => {
        console.log(data.form.fields);
        this.formTitle = data.form.title;
        this.form = data.form.fields;
        data.form.fields.forEach(element => {
          this.answers.push('');
        });
      });

    });
  }
  send() {
    const res = [];
    this.maps.forEach((item) => {
      this.placesAnswers.push(item.getAllSelectedPlaces());
    });
    this.form.forEach((element, index) => {
      if (element.type !== 'Location') {
        res.push({
          name: element.title,
          answer: this.answers[index]
        });
      } else {
        let placesIndexTemp = -1;
        let placesIndex = -1;
        this.form.forEach((q) => {
          if (q.type === 'Location') {
            placesIndexTemp++;

            if (q.title === element.title) {
              placesIndex = placesIndexTemp;
            }
          }
        });

        res.push({
          name: element.title,
          answer: this.placesAnswers[placesIndex]
        });
      }
    });
    this.storage.set('transObj', res);
    this.router.navigate(['main-app/menu/showAnswers']);
  }

}
