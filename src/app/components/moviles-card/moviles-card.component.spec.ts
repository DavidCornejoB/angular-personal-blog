import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovilesCardComponent } from './moviles-card.component';

describe('MovilesCardComponent', () => {
  let component: MovilesCardComponent;
  let fixture: ComponentFixture<MovilesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovilesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovilesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
