import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductSocketDialogComponent } from './add-product-socket-dialog.component';

describe('AddProductSocketDialogComponent', () => {
  let component: AddProductSocketDialogComponent;
  let fixture: ComponentFixture<AddProductSocketDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductSocketDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductSocketDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
