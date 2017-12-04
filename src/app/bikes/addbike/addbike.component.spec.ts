import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbikeComponent } from './addbike.component';

describe('AddbikeComponent', () => {
  let component: AddbikeComponent;
  let fixture: ComponentFixture<AddbikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
