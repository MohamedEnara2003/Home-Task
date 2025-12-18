import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAddition } from './latest-addition';

describe('LatestAddition', () => {
  let component: LatestAddition;
  let fixture: ComponentFixture<LatestAddition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestAddition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestAddition);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
