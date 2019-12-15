import { Component, OnInit } from '@angular/core';

import * as WebFontLoader from 'webfontloader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isFontsLoaded = false;
  isStylesLoaded = false;

  constructor() { }

  ngOnInit(): void {
    WebFontLoader.load({
      active: () => {
        this.isFontsLoaded = true;
        this.isStylesLoaded = true;
      },
      google: {
        families: ['Monoton']
      }
    });

  }

}
