import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: String = 'ironman';
  public age: number = 45;

  get capitalizeName(): String {
    return this.name.toUpperCase();
  }

  getHeroDescription(): String{


    return `${this.name } - ${this.age}` ;

  }

  changeHero():void{
this.name = 'Spiderman'

  }

  changeAge():void{


    this.age = 20;
  }

resetForm(): void {

  this.name = 'ironman';
  this.age = 45;

}


}
