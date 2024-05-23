import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css'
})
export class DetalleUsuarioComponent {
  email: any;
  password: any;
  role: any;
  token: any;
  id: any;
  servicio = inject(LoginService)
  ruta = inject(Router)
  router=inject(ActivatedRoute)
  ngOnInit(){
    this.router.params.subscribe(r=>{
      this.servicio.getUsersID(r['idDetalle']).subscribe(p =>{
        this.email = p.email
        this.password=p.password
        this.role=p.role
        this.id=p.id
      })

    })
    
  }
  editar(users: any) {
    this.servicio.putUsers(users.value).subscribe()
    this.ruta.navigateByUrl('gestionUsuarios')
  }

}
