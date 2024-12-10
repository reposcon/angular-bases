import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  heroNames: String[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
   public deleteHero?: String ;

  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }
}
