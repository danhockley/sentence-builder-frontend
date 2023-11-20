import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSelectionComponent } from './word-selection.component';

describe('WordSelectionComponent', () => {
  let component: WordSelectionComponent;
  let fixture: ComponentFixture<WordSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordSelectionComponent]
    });
    fixture = TestBed.createComponent(WordSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
