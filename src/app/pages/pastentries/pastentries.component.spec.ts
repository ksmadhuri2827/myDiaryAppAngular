import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastentriesComponent } from './pastentries.component';

describe('PastentriesComponent', () => {
  let component: PastentriesComponent;
  let fixture: ComponentFixture<PastentriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastentriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastentriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
