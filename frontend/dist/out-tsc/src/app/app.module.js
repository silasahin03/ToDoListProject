import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            ReactiveFormsModule,
            BrowserAnimationsModule,
            BrowserModule,
            CommonModule,
            FormsModule,
        ],
        providers: [provideHttpClient()],
        bootstrap: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map