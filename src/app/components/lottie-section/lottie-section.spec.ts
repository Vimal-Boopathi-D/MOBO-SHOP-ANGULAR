import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieSectionComponent } from './lottie-section';

describe('LottieSection', () => {
  let component: LottieSectionComponent;
  let fixture: ComponentFixture<LottieSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottieSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottieSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
