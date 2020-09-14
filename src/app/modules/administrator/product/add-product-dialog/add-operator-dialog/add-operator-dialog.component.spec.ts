import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOperatorDialogComponent } from './add-operator-dialog.component';

describe('AddOperatorDialogComponent', () => {
  let component: AddOperatorDialogComponent;
  let fixture: ComponentFixture<AddOperatorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOperatorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOperatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
