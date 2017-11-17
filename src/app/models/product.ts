import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'products'
})
export class Product extends JsonApiModel {
  @Attribute()
  name: string;

  @Attribute()
  description: string;

  @Attribute()
  price: number;

  @Attribute()
  image: string;

  @Attribute()
  type: string;

  @Attribute()
  available: true;

  @Attribute()
  dailydishfor: true;

  @Attribute()
  ingredients: string;

}
