import {
  ApplicationConfig,
  importProvidersFrom,
  LOCALE_ID,
} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
//import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideAnimations(),
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ],
};
