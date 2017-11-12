import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonApiModule } from 'angular2-jsonapi';
import { DatastoreService } from './service/datastore.service';
import { ProductService } from './service/product.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { StripeFormComponent } from './stripe-form/stripe-form.component';


@NgModule({
  declarations: [
    AppComponent,
    StripeFormComponent
  ],
  imports: [
    BrowserModule,
    JsonApiModule,
    NgbModule.forRoot(), // for root module
    // NgbModule // for child module
    JsonApiModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_hlbV07PdNuEsXI13JQkTNLp2rp5kWos'
    })
  ],
  providers: [
    ProductService,
    DatastoreService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
