import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-damage-button-group',
  templateUrl: './damage-button-group.component.html',
  styleUrls: ['./damage-button-group.component.css']
})
export class DamageButtonGroupComponent implements OnInit {

  @Input()
  damageType: string;

  damageTotal: number = 0;

  constructor() { }

  ngOnInit() {
  }

  updateDamageTotal(damageChange: number) {
    this.damageTotal += damageChange;
  }
}
