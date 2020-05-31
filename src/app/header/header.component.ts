import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output()
  selectEvent: EventEmitter<string> = new EventEmitter();

  onSelectRecipes() {
    this.selectEvent.emit('recipes');
  }

  onSelectShoppingList() {
    this.selectEvent.emit('shoppingList');
  }
}
