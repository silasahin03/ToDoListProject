import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
const apiUrl = 'http://localhost:3000/todos'; 


 const  providers= [ 
    provideRouter(routes), 
    provideHttpClient()]
;
boostrapApplication(AppComponent, {providers: [provideHttpClient()]});
function boostrapApplication(appComponent: any, options: { providers: any[] }) {
  try {
    if (typeof appComponent !== 'function') {
      throw new Error('AppComponent should be a function.');
    }
    console.log('Application bootstrap successful.');

  } catch (error) {
    console.error('Error while bootstrapping application:', error);
  }
}




