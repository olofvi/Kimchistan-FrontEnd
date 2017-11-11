import { Injectable } from '@angular/core';
import { Component } from '@angular/core';

@Injectable()
export class MapService {

  title: string = 'My first AGM project';
  lat: number = 59.3342424;
  lng: number = 18.061639;

  constructor() { }

}
