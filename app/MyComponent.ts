import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MyComponent {
  constructor(private http: Http) { }
}