import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsListComponent } from './icons-list.component';

describe('IconsListComponent', () => {
  let component: IconsListComponent;
  let fixture: ComponentFixture<IconsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
