import { signal , Component, computed } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  imageUrl = signal('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png');
  
  name = signal('Pikachu') ;
  taille = computed(() => {
    if (this.life()<= 15 ) {
      // window.prompt('Petit');
      return 'Petit';

    }

    if (this.life() >= 25 ) {
      // window.prompt('Grand')
      return 'Grand'
    }

    // else {
    //   window.prompt('Moyen');

    // }

    return 'Moyen';

  })
  life = signal(22) ;


  incrementLife () {
    console.log('+1 point de vie !');

    this.life.update( (n) => n + 1);

  }
  
  
  decrementLife () {
    console.log('-1 point de vie !');

    this.life.update( (n) => n - 1 ) ;

  }

}

