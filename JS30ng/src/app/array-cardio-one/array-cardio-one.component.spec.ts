import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayCardioOneComponent } from './array-cardio-one.component';

describe('ArrayCardioOneComponent', () => {
  let component: ArrayCardioOneComponent;
  let fixture: ComponentFixture<ArrayCardioOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayCardioOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayCardioOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
