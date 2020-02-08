import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-show-answers',
  templateUrl: './show-answers.page.html',
  styleUrls: ['./show-answers.page.scss'],
})
export class ShowAnswersPage implements OnInit {
  answer = [];
  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.get('transObj').then((res) => {
      this.answer = res;
    });
  }

}
