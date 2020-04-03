import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexPanelGalleryComponent } from './flex-panel-gallery.component';

describe('FlexPanelGalleryComponent', () => {
  let component: FlexPanelGalleryComponent;
  let fixture: ComponentFixture<FlexPanelGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexPanelGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexPanelGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
