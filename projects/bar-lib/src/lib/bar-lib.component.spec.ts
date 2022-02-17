import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarLibComponent } from './bar-lib.component';

describe('BarLibComponent', () => {
  let component: BarLibComponent;
  let fixture: ComponentFixture<BarLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
