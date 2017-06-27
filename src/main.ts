import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

import { BirdlifeMapModule } from './app/birdlife.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BirdlifeMapModule);
