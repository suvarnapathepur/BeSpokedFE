import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  
  
  
    //bootstraping application not doing bootstrap module application. hence appmodule will not recognized by the application
    // platformBrowserDynamic().bootstrapModule(AppModule)
    // .catch(err => console.error(err));
  