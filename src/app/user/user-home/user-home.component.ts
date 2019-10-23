import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  example = [{
    name: 'Juan Martinez',
    location:'Morelos I, calle 1000',
    image: 'https://static.tokkobroker.com/pictures/81938165127021890338265038282014168749898291510360408377180286627383935145384.jpg',
    description: 'Descripcion de la casa, departamento, cuarto, etc etc, maximo 300 palabras. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquid quaerat molestiae amet    molestias. Natus, odio minus hic, praesentium, iusto quibusdam repellat dolorem nobis repellendus asperiores minima maiores consectetur quis'

  },
  {
    name: 'Jose Perez',
    location:'Avenida Universidad',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: 'Descripcion de la casa, departamento, cuarto, etc etc, maximo 300 palabras. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquid quaerat molestiae amet    molestias. Natus, odio minus hic, praesentium, iusto quibusdam repellat dolorem nobis repellendus asperiores minima maiores consectetur quis'
  },
  {
    name: 'Juan Martinez',
    location:'Morelos I, calle 1000',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: 'Descripcion de la casa, departamento, cuarto, etc etc, maximo 300 palabras. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquid quaerat molestiae amet    molestias. Natus, odio minus hic, praesentium, iusto quibusdam repellat dolorem nobis repellendus asperiores minima maiores consectetur quis'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
