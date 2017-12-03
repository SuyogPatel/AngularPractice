import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebikeComponent } from './deletebike.component';

describe('DeletebikeComponent', () => {
  let component: DeletebikeComponent;
  let fixture: ComponentFixture<DeletebikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletebikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletebikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
