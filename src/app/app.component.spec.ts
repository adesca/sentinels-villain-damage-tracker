import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {DamageButtonGroupComponent} from 'src/app/damage-button-group/damage-button-group.component';
import {By} from '@angular/platform-browser';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      MatFormFieldModule, MatInputModule, NoopAnimationsModule],

      declarations: [
        AppComponent,
        DamageButtonGroupComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add up damage totals from damage button groups', function () {
    const damageButtons: DamageButtonGroupComponent[] = fixture.debugElement.queryAll(By.directive(DamageButtonGroupComponent))
      .map(debugEl => debugEl.componentInstance);
    damageButtons.forEach(btn => {
      btn.damageTotal = 2;
    });

    expect(component.getCurrentDamage()).toEqual(24);
  });
});
