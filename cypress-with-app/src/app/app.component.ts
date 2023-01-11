import { Component } from '@angular/core';
import { GreetingService } from './services/greeting.service';

@Component({
  selector: 'cypress-front-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cypress-front';
  greeting: string|undefined;
  constructor(
    private readonly greetingService: GreetingService
  ) {
  }

  ngOnInit(): void {
    this.greetingService.getGreetings().subscribe(greetings => {
      this.greeting = greetings[0];
    });
  }
}
