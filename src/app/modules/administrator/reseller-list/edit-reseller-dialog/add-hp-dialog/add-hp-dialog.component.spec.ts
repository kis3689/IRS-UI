import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHpDialogComponent } from './add-hp-dialog.component';

describe('AddHpDialogComponent', () => {
  let component: AddHpDialogComponent;
  let fixture: ComponentFixture<AddHpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
