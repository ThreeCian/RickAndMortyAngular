import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardstsComponent } from './cardsts.component';

describe('CardstsComponent', () => {
  let component: CardstsComponent;
  let fixture: ComponentFixture<CardstsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardstsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardstsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
