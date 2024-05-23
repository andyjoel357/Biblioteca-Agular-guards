import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-tabla-libros',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla-libros.component.html',
  styleUrl: './tabla-libros.component.css'
})
export class TablaLibrosComponent {
  servicio = inject(LibrosService)
libros:any;

ngOnInit(){
  this.servicio.getLibros().subscribe(l=>{
    this.libros = l
  })
}
eliminar(id:any){


var resultado = window.confirm('Estas seguro?');
if (resultado === true) {
  this.servicio.deleteLibrosID(id).subscribe()
  window.location.reload()
} else { 
  window.alert('Ningun dato se eliminara');
}
}
}
