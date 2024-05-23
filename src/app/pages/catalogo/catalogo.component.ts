import { Component } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
constructor(private servicios: LibrosService){}
libros:any
ngOnInit(){

  this.servicios.getLibros().subscribe(p=>{
    this.libros= p
  })
  }
  set(){
      this.libros.estado = 'devuelto'
    }
  }

