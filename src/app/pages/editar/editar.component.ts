import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibrosService } from '../../services/libros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
id: any;
titulo: any;
autor:any;
year:any;
genero:any;

servicio = inject(LibrosService)
  ruta = inject(Router)
  router=inject(ActivatedRoute)

  ngOnInit(){
    this.router.params.subscribe(r=>{
      this.servicio.getLibrosID(r['idLibros']).subscribe(p =>{
        this.id = p.id
        this.titulo=p.titulo
        this.autor=p.autor
        this.year=p.year
        this.genero=p.genero
      })

    })
    
  }
  editar(datos: any) {
    this.servicio.putLibros(datos.value).subscribe()
    this.ruta.navigateByUrl('gestionLibros')
  }


}
