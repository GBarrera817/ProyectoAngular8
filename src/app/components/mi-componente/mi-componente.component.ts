import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente', //etiqueta html
    templateUrl: './mi-componente.component.html'
})

export class MiComponente {

    //propiedades
    public titulo: string;
    public comentario: string;
    public year: number;
    

    constructor(){
        this.titulo = "Hola mundo, soy Mi-Componente";
        this.comentario = "Este es mi primer componente";
        this.year = 2010;

        console.log("Componente mi-componente cargado!!");
        console.log(this.titulo, this.comentario, this.year);
    }
    
}