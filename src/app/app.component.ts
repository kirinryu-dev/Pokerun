import { signal , Component, computed } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { POKEMON_LIST } from './pokemon-list.fake';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  pokemonList = signal(POKEMON_LIST);

 size(pokemon: Pokemon ){
  if(pokemon.life <= 15){
    return 'low health';

  }

  if(pokemon.life >= 25){
    return 'hight health';

  }

  return 'moyen';
}

// pokemn life control task 
incrementLife(pokemon: Pokemon) {
  pokemon.life = pokemon.life + 1 ;

}

decrementLife(pokemon: Pokemon) {
  pokemon.life = pokemon.life - 1 ;
}

}

