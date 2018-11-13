import { Component, OnInit, AfterViewInit } from '@angular/core';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlTileLayer from 'ol/layer/Tile';
import OlOSM from 'ol/source/OSM';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'olSamples';
  map:OlMap;

  constructor(){
    
  }

  ngOnInit() {
    this.map=new OlMap({
      target: 'map',
      layers: [
        new OlTileLayer({
          source: new OlOSM()
        })
      ],
      view: new OlView({
        center: [0, 0],
        zoom: 0
      })
    });
  }
  ngAfterViewInit() {
    
  }

}
