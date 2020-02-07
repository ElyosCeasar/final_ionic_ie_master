import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowSpeceficFormPage } from './show-specefic-form.page';

describe('ShowSpeceficFormPage', () => {
  let component: ShowSpeceficFormPage;
  let fixture: ComponentFixture<ShowSpeceficFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSpeceficFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowSpeceficFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
