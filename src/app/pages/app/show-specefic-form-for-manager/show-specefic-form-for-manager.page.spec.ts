import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowSpeceficFormForManagerPage } from './show-specefic-form-for-manager.page';

describe('ShowSpeceficFormForManagerPage', () => {
  let component: ShowSpeceficFormForManagerPage;
  let fixture: ComponentFixture<ShowSpeceficFormForManagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSpeceficFormForManagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowSpeceficFormForManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
