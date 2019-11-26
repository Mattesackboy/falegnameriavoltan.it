//
//  Falegnameria-Voltan
//
//  Created by Matteo Brogin.
//  Copyright © 2019 Matteo Brogin. All rights reserved.
//

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import 'hammerjs'; Importing it will disable pinch to zoom browser behavior on images, but will enable changing image swiping

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
