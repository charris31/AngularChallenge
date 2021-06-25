import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularChallenge';
  textToChange = 'Text to change';
  hobbyArray = ["I like to play videogames", "I like to draw", "I like to play or watch sports", "I like to read comics and manga", "I like watching anime and cartoons"];
}
