import { NgModule } from '@angular/core';
//import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'AppComponent';
import { StoreModule } from "@ngrx/store";
import { StockModule } from 'stock/StockModule';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [ 
        BrowserModule,
        StockModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
    ],
    bootstrap: [
        AppComponent
    ],
    exports: [],
    providers: [],
})
export class AppModule {

}





