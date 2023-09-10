import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendCardComponent } from './backend-card.component';

describe('BackendCardComponent', () => {
  let component: BackendCardComponent;
  let fixture: ComponentFixture<BackendCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
