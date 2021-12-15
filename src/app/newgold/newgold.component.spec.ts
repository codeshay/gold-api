import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgoldComponent } from './newgold.component';

describe('NewgoldComponent', () => {
  let component: NewgoldComponent;
  let fixture: ComponentFixture<NewgoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewgoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewgoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
