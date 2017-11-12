import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-stripe-form',
  templateUrl: './stripe-form.component.html',
  styleUrls: ['./stripe-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StripeFormComponent implements OnInit {
  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_tzGL0gkTTfi6MspvJQhEo6Hq',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'Kimchistan',
      description: '2 widgets',
      amount: 2000
    });

  }

  constructor() { }

  ngOnInit() {
  }

}
