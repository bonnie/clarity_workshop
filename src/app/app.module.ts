import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

@NgModule({
    declarations: [
        // components written by you
        AppComponent,
        AboutComponent,
        HomeComponent
    ],
    imports: [
        // components written by others (1st 4 = angular; ClarityModule = clarity)
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING // a module written by us
    ],
    providers: [], // array of services and dependencies for this module
    bootstrap: [AppComponent] 
})
export class AppModule {
}
