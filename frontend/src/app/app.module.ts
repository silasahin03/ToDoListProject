// Örnek: app.module.ts

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // CommonModule import ediliyor
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { provideHttpClient} from '@angular/common/http';
import { ApiService } from '../services/api.service';

@NgModule({
 declarations: [
    //AppComponent
  ],
  imports: [
    //AppComponent,
    BrowserModule,
    CommonModule,
    FormsModule,
    ],
  providers: [ApiService, provideHttpClient()],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
