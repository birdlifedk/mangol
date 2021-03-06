import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { MangolMapComponent } from './components/map.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  exports: [
    MangolMapComponent
  ],
  declarations: [
    MangolMapComponent
  ]
})
export class MangolMapModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MangolMapModule,
      providers: []
    };
  }
}
