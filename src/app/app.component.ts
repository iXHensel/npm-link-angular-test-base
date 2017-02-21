import { Component } from '@angular/core';
import { SomeService } from 'npm-link-angular-test-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private someService: SomeService) {
    someService.getDescription().subscribe((result) => {
      this.title = result;
    })
  }
}
