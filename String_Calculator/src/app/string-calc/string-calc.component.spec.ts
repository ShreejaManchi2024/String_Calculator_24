import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringCalcComponent } from './string-calc.component';

describe('StringCalcComponent', () => {
  let component: StringCalcComponent;
  let fixture: ComponentFixture<StringCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
