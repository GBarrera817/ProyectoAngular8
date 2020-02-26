import { Component } from '@angular/core';

// Decorador: funcionalidad que se le aplica a una clase y que modifica el comportamiento que tiene la clase.
// Son caracteristicas y funcionalidades que tendrá la clase al final.
@Component({
  selector: 'app-root', //Etiqueta HTML
  templateUrl: './app.component.html', // Vista asociada al componente (archivo HTML)
  styleUrls: ['./app.component.css'] 
})

export class AppComponent {
  // Propiedades - atributos
  title = 'AprendiendoAngular';
}
