import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPComponent } from './player-p.component';

describe('PlayerPComponent', () => {
  let component: PlayerPComponent;
  let fixture: ComponentFixture<PlayerPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
