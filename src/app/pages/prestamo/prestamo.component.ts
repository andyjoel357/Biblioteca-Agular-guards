import { Component, inject } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-prestamo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prestamo.component.html',
  styleUrl: './prestamo.component.css'
})
export class PrestamoComponent {

id: any;
titulo: any;
autor:any;
year:any;
genero:any;
estado:any;
  
  servicio=inject(LibrosService)
  
  guardar(datos: NgForm){
  this.servicio.postLibros(datos.value).subscribe()
  window.location.reload()
  }
}
