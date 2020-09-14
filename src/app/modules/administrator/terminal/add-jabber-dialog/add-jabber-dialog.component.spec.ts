import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJabberDialogComponent } from './add-jabber-dialog.component';

describe('AddJabberDialogComponent', () => {
  let component: AddJabberDialogComponent;
  let fixture: ComponentFixture<AddJabberDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJabberDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJabberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
