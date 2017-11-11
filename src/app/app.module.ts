import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonApiModule } from 'angular2-jsonapi';
import { DatastoreService } from './service/datastore.service';
import { ProductService } from './service/product.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonApiModule,
    NgbModule.forRoot() // for root module
    // NgbModule // for child module
  ],
  providers: [
    ProductService,
    DatastoreService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
