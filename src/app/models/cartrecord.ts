import {JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo} from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'payments'
})
export class Cartrecord extends JsonApiModel {
  @Attribute()
  email: string;

  @Attribute()
  cart: object;
