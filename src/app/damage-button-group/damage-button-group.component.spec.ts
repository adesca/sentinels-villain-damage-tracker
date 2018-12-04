import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageButtonGroupComponent } from './damage-button-group.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('DamageButtonGroupComponent', () => {
  let component: DamageButtonGroupComponent;
  let fixture: ComponentFixture<DamageButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatInputModule, NoopAnimationsModule],
      declarations: [ DamageButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
