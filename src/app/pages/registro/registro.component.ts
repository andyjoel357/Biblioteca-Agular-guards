import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  email: any;
  password: any;
  rol: any;
  token: any;
  servicio = inject(LoginService)

  registro(datos: any){
    this.servicio.postUsers2(datos.value).subscribe()
    window.location.href = 'login'
  }

}
