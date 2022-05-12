import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyandviewComponent } from './buyandview.component';

describe('BuyandviewComponent', () => {
  let component: BuyandviewComponent;
  let fixture: ComponentFixture<BuyandviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyandviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyandviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
