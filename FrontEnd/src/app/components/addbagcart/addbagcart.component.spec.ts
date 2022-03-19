import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbagcartComponent } from './addbagcart.component';

describe('AddflightComponent', () => {
  let component: AddbagcartComponent;
  let fixture: ComponentFixture<AddbagcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbagcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbagcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
