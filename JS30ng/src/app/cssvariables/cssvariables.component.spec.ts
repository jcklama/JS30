import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSVariablesComponent } from './cssvariables.component';

describe('CSSVariablesComponent', () => {
  let component: CSSVariablesComponent;
  let fixture: ComponentFixture<CSSVariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSSVariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSSVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
