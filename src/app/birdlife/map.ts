import { MangolMapService } from './../../lib/services/map.service';
import { MangolMap } from './../../lib/core/map';
import { Component } from '@angular/core';

import * as ol from 'openlayers';

@Component({
  selector: 'birdlife-map',
  template: `
      <mangol></mangol>
    `
})
export class MapComponent {

}