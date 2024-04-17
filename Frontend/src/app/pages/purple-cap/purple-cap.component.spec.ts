import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleCapComponent } from './purple-cap.component';

describe('PurpleCapComponent', () => {
  let component: PurpleCapComponent;
  let fixture: ComponentFixture<PurpleCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurpleCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurpleCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
