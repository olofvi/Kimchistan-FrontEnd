import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'orders'
})
export class Order extends JsonApiModel {
  @Attribute()
  email: string;

  @Attribute()
  cart: object;
}
