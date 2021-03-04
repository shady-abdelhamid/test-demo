import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { D1Directive } from './d1.directive';
import { D2Directive } from './d2.directive';
import { P1Pipe } from './p1.pipe';
import { P2Pipe } from './p2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    D1Directive,
    D2Directive,
    P1Pipe,
    P2Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
