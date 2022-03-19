import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignfliComponent } from './assignfli.component';

describe('AddflightComponent', () => {
  let component: AssignfliComponent;
  let fixture: ComponentFixture<AssignfliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignfliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignfliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
