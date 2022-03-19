import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosebagcartComponent } from './closebagcart.component';

describe('AddflightComponent', () => {
  let component: ClosebagcartComponent;
  let fixture: ComponentFixture<ClosebagcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosebagcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosebagcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
