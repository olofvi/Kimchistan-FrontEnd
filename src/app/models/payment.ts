import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'payments'
})
export class Payment extends JsonApiModel {
  @Attribute()
  email: string;

  @Attribute()
  token: string;

  @Attribute()
  amount: number;

}
