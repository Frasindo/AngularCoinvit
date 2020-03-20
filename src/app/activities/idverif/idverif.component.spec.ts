import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdverifComponent } from './idverif.component';

describe('IdverifComponent', () => {
  let component: IdverifComponent;
  let fixture: ComponentFixture<IdverifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdverifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdverifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
