// import { JsonApiModule } from 'angular2-jsonapi';
// import { BrowserModule } from '@angular/platform-browser';
// import { TestBed, async } from '@angular/core/testing';
// import { Http, ConnectionBackend, RequestOptions, HttpModule } from '@angular/http';

// import { AppComponent } from './app.component';

// import { DatastoreService } from './service/datastore.service';
// import { ProductService } from './service/product.service';

// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         BrowserModule,
//         // HttpModule,
//         JsonApiModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//       providers: [
//         // Http,
//         // ConnectionBackend,
//         DatastoreService,
//         ProductService,
//         // RequestOptions
//       ]
//     }).compileComponents();
//   }));
//   it('should create the app', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));
//   it(`should have as title 'app'`, async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('app');
//   }));
//   it('should render title in a h1 tag', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
//   }));
// });
