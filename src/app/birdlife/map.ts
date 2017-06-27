import { MangolMapService } from './../../lib/services/map.service';
import { MangolMap } from './../../lib/core/map';
import { Component, OnInit } from '@angular/core';

import * as ol from 'openlayers';

@Component({
  selector: 'birdlife-gpsmap',
  template: `
      <mangol [config]="config"></mangol>
    `
})
export class GPSMapComponent implements OnInit {

  config: any;

  public ngOnInit(): any {
    this.config = {
    map: {
        renderer: 'canvas',
        target: 'gpsmap-div',
        view: {
          projection: 'EPSG:900913',
          center: ol.proj.fromLonLat([11.55, 56.15], 'EPSG:900913'),
          zoom: 7
        },
        layers: [
          {
            type: 'layer',
            name: 'OpenStreetMap layer',
            layer: new ol.layer.Tile({
              source: new ol.source.OSM()
            })
          },
          {type: 'layer',
                name: 'Main roads',
                visible: true,
                opacity: 1.0,
                layer: new ol.layer.Tile({
                  source: new ol.source.TileWMS({
                    url: 'http://geoserver:9080/geoserver/wms',
                    params: {
                      LAYERS: 'gps_observation',
                      SRS: 'EPSG:900913',
                      FORMAT: 'image/png',
                      TILED: false
                    },
                    serverType: 'geoserver',
                    projection: 'EPSG:900913'
                  })
                })}
        ]
      }    
    };
  };
}