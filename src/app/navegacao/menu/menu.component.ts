import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  nav: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      axact: true,
      admin: false
    },
    {
      link: '/cadastro',
      name: 'Cadastro',
      axact: true,
      admin: false
    },
    {
      link: '/sobre',
      name: 'Sobre',
      axact: true,
      admin: false
    },
    {
      link: '/produtos',
      name: 'Produtos',
      axact: false,
      admin: false
    },
    {
      link: '/admin',
      name: 'Admin',
      axact: false,
      admin: false
    },
    {
      link: '/filmes',
      name: 'Filmes',
      axact: false,
      admin: false
    },
    {
      link: '/bar',
      name: 'Bar',
      axact: false,
      admin: false
    },
    {
      link: '/todo',
      name: 'To do',
      axact: false,
      admin: false
    }
  ]
}

interface Nav {
  link: string;
  name: string;
  axact: boolean;
  admin: boolean;
}