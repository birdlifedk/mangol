import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  MapComponent
} from './birdlife/map';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/map',
    pathMatch: 'full'
  }, {
    path: 'map',
    component: MapComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
