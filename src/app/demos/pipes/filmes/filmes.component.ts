import { Component, OnInit } from '@angular/core';
import { Filme } from './filme';
import { ImageFormaterPipe } from './image.pipe';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  providers: [
    ImageFormaterPipe
  ]
})
export class FilmesComponent implements OnInit {

  filmes: Filme[];
  mapped: Filme[];

  constructor(private imageFormater: ImageFormaterPipe) { }

  ngOnInit() {

    this.filmes = [
      {
        nome: 'Um Sonho de Liberdade',
        dataLancamento: new Date('12/07/1994'),
        valor: 150.0,
        imagem: 'sonhoLiberdade.jpg',
        tamanho: '513326980'
      },
      {
        nome: 'o poderoso chefão',
        dataLancamento: new Date('01/12/1972'),
        valor: 200.0,
        imagem: 'poderosoChefaoI.jpg',
        tamanho: '1342177280'
      },
      {
        nome: 'Batman O Cavaleiro das Trevas',
        dataLancamento: new Date('08/01/2008'),
        valor: 70.0,
        imagem: '',
        tamanho: '719974729'
      }
    ];

    this.mapped = this.filmes.map(filme => {
      return {
        nome: filme.nome,
        dataLancamento: filme.dataLancamento,
        valor: filme.valor,
        tamanho: filme.tamanho,
        imagem: this.imageFormater.transform(filme.imagem, 'default', true)
      }
    });

  }



}
