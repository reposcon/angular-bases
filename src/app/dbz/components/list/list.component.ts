import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: false,
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'trunks',
      power: 10,
    },
  ];

  @Output()
  public onDelete: EventEmitter<String> = new EventEmitter();

  onDeleteCharater( id ?: String):void {
    if (!id) return;
    this.onDelete.emit(id);
  }
}

