import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Omar'
  age = 24;
  img = "https://www.w3schools.com/w3images/avatar6.png";
  btnDisable = true
  person = {
    name: 'Omar',
    age: 24,
    avatar : 'https://www.w3schools.com/w3images/avatar6.png'
  }

  toggleButton(){
    // if (this.btnDisable == true){
    //   this.btnDisable = false;
    // } else{
    //   this.btnDisable = true;
    // }
    //Forma de mejorarlo:
    this.btnDisable = !this.btnDisable
  }

  ageIncrement(){
    this.person.age++
  }

  onScroll(event : Event){
    //el event.target es para que podamos obtener el elemento que está
    //mandando el evento, y así acceder a sus propiedades
    //Luego hacemos que se comporte como un elemento HTML
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }
  changeName(event : Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
