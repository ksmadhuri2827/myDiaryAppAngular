import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewentryComponent } from './viewentry.component';

describe('ViewentryComponent', () => {
  let component: ViewentryComponent;
  let fixture: ComponentFixture<ViewentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewentryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
