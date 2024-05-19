import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersonUpdateComponent } from './salesperson-update.component';

describe('SalespersonUpdateComponent', () => {
  let component: SalespersonUpdateComponent;
  let fixture: ComponentFixture<SalespersonUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalespersonUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalespersonUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
