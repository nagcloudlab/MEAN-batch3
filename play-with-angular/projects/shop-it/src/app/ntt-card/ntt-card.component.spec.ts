import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NttCardComponent } from './ntt-card.component';

describe('NttCardComponent', () => {
  let component: NttCardComponent;
  let fixture: ComponentFixture<NttCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NttCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NttCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
