import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { routing, appRoutingProviders } from './birdlife.routing';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import 'hammerjs';

import { MangolModule } from './../../index';

import { BirdlifeComponent } from './birdlife.component';

import {
  GPSMapComponent
} from './birdlife/map';

@NgModule({
  declarations: [
    BirdlifeComponent,
    GPSMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    MangolModule.forRoot(),
    routing
  ],
  providers: [
    appRoutingProviders,
    { provide: Window, useValue: window },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [BirdlifeComponent]
})
export class BirdlifeMapModule { }
