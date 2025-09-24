import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalTree } from './horizontal-tree';

describe('HorizontalTree', () => {
  let component: HorizontalTree;
  let fixture: ComponentFixture<HorizontalTree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalTree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalTree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
