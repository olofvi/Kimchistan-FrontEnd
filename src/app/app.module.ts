import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonApiModule } from 'angular2-jsonapi';
import { Datastore } from './services/datastore.service';
import { ProductService } from './services/product.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonApiModule
  ],
  providers: [],
  Datastore,
  ProductService,
  bootstrap: [AppComponent]
})
export class AppModule { }
