import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  servicio = inject(LoginService)

  email: any;
  password: any;
  token: any;
  admin: any;
  ruta = inject(Router)
  login(formulario: any) {
    this.servicio.postUsers(formulario.value).subscribe(p => {
      this.token = p.accessToken
      if (this.token != false && p.users.role == 'bibliotecario') {
        localStorage.setItem("token", 'true')
        window.location.href=('catalogo')
      } else if (this.token != true && p.users.role == 'administrador'){
        localStorage.setItem("admin", 'true')
        window.location.href=('gestionLibros')
      }
    })
  }
}
