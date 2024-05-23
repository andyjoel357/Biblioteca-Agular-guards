import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestion-usuarios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.css'
})
export class GestionUsuariosComponent {
  servicio = inject(LoginService)
  users:any;
  
  ngOnInit(){
    this.servicio.getUsers().subscribe(u=>{
      this.users = u
    })
  }
  eliminar(id:any){
  var resultado = window.confirm('Estas seguro?');
  if (resultado === true) {
    this.servicio.deleteUsersID(id).subscribe()
    window.location.reload()
  } else { 
    window.alert('Ningun dato se eliminara');
  }
  }
}
