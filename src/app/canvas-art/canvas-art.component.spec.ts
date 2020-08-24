import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasArtComponent } from './canvas-art.component';

describe('CanvasArtComponent', () => {
  let component: CanvasArtComponent;
  let fixture: ComponentFixture<CanvasArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
