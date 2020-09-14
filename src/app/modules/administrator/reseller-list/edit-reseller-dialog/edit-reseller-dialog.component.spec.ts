import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResellerDialogComponent } from './edit-reseller-dialog.component';

describe('EditResellerDialogComponent', () => {
  let component: EditResellerDialogComponent;
  let fixture: ComponentFixture<EditResellerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditResellerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResellerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
