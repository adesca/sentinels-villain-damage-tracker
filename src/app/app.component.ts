import {Component, QueryList, ViewChildren} from '@angular/core';
import {DamageButtonGroupComponent} from 'src/app/damage-button-group/damage-button-group.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sentinels-villain-damage-tracker';

  @ViewChildren(DamageButtonGroupComponent) damageButtons: QueryList<DamageButtonGroupComponent>;

  damageTypes = ['GLOBAL', 'COLD', 'ENERGY', 'FIRE', 'INFERNAL',
    'LIGHTNING', 'MELEE', 'PROJfECTILE', 'PSYCHIC', 'RADIANT', 'SONIC', 'TOXIC'];

  getCurrentDamage() {
    return this.damageButtons.reduce(((prevValue: number, curValue: DamageButtonGroupComponent) => {
      return prevValue + curValue.damageTotal;
    }), 0);
  }
}
