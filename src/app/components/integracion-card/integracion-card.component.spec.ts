import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegracionCardComponent } from './integracion-card.component';

describe('IntegracionCardComponent', () => {
  let component: IntegracionCardComponent;
  let fixture: ComponentFixture<IntegracionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegracionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegracionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
