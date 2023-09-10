import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasesCardComponent } from './databases-card.component';

describe('DatabasesCardComponent', () => {
  let component: DatabasesCardComponent;
  let fixture: ComponentFixture<DatabasesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabasesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabasesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
