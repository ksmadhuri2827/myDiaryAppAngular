import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateentryComponent } from './updateentry.component';

describe('UpdateentryComponent', () => {
  let component: UpdateentryComponent;
  let fixture: ComponentFixture<UpdateentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateentryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
