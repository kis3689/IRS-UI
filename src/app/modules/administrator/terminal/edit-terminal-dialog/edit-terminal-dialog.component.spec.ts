import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTerminalDialogComponent } from './edit-terminal-dialog.component';

describe('EditTerminalDialogComponent', () => {
  let component: EditTerminalDialogComponent;
  let fixture: ComponentFixture<EditTerminalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTerminalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTerminalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
