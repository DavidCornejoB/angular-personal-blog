import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendCardComponent } from './frontend-card.component';

describe('FrontendCardComponent', () => {
  let component: FrontendCardComponent;
  let fixture: ComponentFixture<FrontendCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
