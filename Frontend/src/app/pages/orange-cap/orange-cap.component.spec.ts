import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeCapComponent } from './orange-cap.component';

describe('OrangeCapComponent', () => {
  let component: OrangeCapComponent;
  let fixture: ComponentFixture<OrangeCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangeCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
