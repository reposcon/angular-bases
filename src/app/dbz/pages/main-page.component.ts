import { Component } from '@angular/core';
import { Dbzservice } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.Component.html',
  standalone: false,
})
export class MainPageComponent {
  constructor(private dbzservice: Dbzservice) {}
  get characters(): Character[] {
    return [...this.dbzservice.characters];
  }
  onDeleteCharacter(id: String): void {
    this.dbzservice.onDeleteCharacterById(id);
  }
  onNewCharacter(Character: Character) {
    this.dbzservice.addCharacter(Character) ;
  }
}
