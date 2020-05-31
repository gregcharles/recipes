import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes';
  selection = 'recipes';

  onHeaderSelection(event: string) {
    this.selection = event;
  }
}
