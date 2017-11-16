import {JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo} from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'orders'
})
export class Order extends JsonApiModel {
  @Attribute()
  email: string;

  @Attribute()
  cart: object;
}
