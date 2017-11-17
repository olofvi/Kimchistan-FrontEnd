import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonApiModule } from 'angular2-jsonapi';
import { DatastoreService } from './service/datastore.service';
import { ProductService } from './service/product.service';
import { ShoppingCartService } from './service/shoppingcart.service';
import { OrderService } from './service/order.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { PaymentService } from './service/payment.service';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(), // for root module
    // NgbModule // for child module
    JsonApiModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_hlbV07PdNuEsXI13JQkTNLp2rp5kWos'
    })
  ],
  providers: [
    ProductService,
    DatastoreService,
    ShoppingCartService,
    PaymentService,
    OrderService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
