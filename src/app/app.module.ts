import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonApiModule } from 'angular2-jsonapi';
import { DatastoreService } from './service/datastore.service';
import { ProductService } from './service/product.service';
import { MapService} from './service/map.service';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonApiModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCyPHXzLMoPazrF86EJhXjlSL9LA8V9YzY'
    })
  ],
  providers: [
    ProductService,
    DatastoreService,
    MapService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
