import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule} from '@angular/material';
import { DamageButtonGroupComponent } from './damage-button-group/damage-button-group.component';
import {MatFormFieldModule} from '@angular/material/typings/esm5/form-field';

@NgModule({
  declarations: [
    AppComponent,
    DamageButtonGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
