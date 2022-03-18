import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfreportsComponent } from './pdfreports.component';

describe('AddflightComponent', () => {
  let component: PdfreportsComponent;
  let fixture: ComponentFixture<PdfreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
