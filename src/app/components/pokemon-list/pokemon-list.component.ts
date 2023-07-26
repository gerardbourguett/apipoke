import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  data: any[] = []
  constructor(private pokemonApi: PokemonApiService) { }

  ngOnInit(): void {
      this.tomarData()
  }

  tomarData() {
    this.pokemonApi.getData().subscribe(data => {
      this.data = data.results
      console.log(this.data)
    })
  }
}
