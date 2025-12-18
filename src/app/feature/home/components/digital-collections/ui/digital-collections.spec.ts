import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalCollections } from './digital-collections';

describe('DigitalCollections', () => {
  let component: DigitalCollections;
  let fixture: ComponentFixture<DigitalCollections>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalCollections]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalCollections);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
