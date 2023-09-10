import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyCardComponent } from './hobby-card.component';

describe('HobbyCardComponent', () => {
  let component: HobbyCardComponent;
  let fixture: ComponentFixture<HobbyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
