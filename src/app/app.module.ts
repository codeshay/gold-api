import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FedTreasuryComponent } from '../app/fed-treasury/fed-treasury.component';
import { NewgoldComponent } from './newgold/newgold.component';
@NgModule({
  declarations: [
    AppComponent,
    FedTreasuryComponent,
    NewgoldComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
