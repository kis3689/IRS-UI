import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefixOperatorComponent } from './prefix-operator.component';

describe('PrefixOperatorComponent', () => {
  let component: PrefixOperatorComponent;
  let fixture: ComponentFixture<PrefixOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefixOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefixOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
