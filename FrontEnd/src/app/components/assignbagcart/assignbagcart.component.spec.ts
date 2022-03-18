import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignbagcartComponent } from './assignbagcart.component';

describe('AddflightComponent', () => {
  let component: AssignbagcartComponent;
  let fixture: ComponentFixture<AssignbagcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignbagcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignbagcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
