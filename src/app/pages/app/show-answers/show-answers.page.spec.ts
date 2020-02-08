import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowAnswersPage } from './show-answers.page';

describe('ShowAnswersPage', () => {
  let component: ShowAnswersPage;
  let fixture: ComponentFixture<ShowAnswersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAnswersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowAnswersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
