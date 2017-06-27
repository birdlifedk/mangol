import { Component, Inject } from '@angular/core';

@Component({
  selector: 'birdlife',
  template: `
    <div class="birdlife">
        <div class="mapheader">
            <div class="mapcontent">
                <router-outlet></router-outlet>
            </div>
        </div>
    </div>
      `
})
export class BirdlifeComponent {
  // this is how you use a window
//   constructor( @Inject(Window) window) {
//   }
}