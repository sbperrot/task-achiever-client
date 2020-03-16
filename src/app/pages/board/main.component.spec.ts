import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMainComponent } from './main.component';

describe('MainComponent', () => {
  let component: BoardMainComponent;
  let fixture: ComponentFixture<BoardMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
