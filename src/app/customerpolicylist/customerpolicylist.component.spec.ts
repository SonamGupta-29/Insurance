import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerpolicylistComponent } from './customerpolicylist.component';

describe('CustomerpolicylistComponent', () => {
  let component: CustomerpolicylistComponent;
  let fixture: ComponentFixture<CustomerpolicylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerpolicylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerpolicylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
