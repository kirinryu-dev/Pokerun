import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  name = 'Pikachu' ;
  life = 21 ;





  incrementLife () {
    console.log('+1 point de vie !');

    this.life = this.life + 1

  }
  
  
  decrementLife () {
    console.log('-1 point de vie !');

    this.life = this.life -1 

  }

}

