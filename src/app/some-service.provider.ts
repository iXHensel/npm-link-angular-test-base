import { Http } from '@angular/http';
import { OpaqueToken } from '@angular/core';
import { SomeService } from 'npm-link-angular-test-module';

export function SomeServiceFactory(http: Http) {
  return new SomeService(http, 'angular', 'angular');
}
export let SomeServiceProvider = {
  provide: SomeService,
  useFactory: SomeServiceFactory,
  deps: [Http]
};