import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrosService } from '../../services/libros.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  users : any
  ocultar = localStorage.getItem('token')
  rol = localStorage.getItem('admin')
  servicios= inject(LoginService)
  cerrar(){
    localStorage.removeItem('token')
    localStorage.removeItem('admin')
    window.location.href='login'
  }
  
}
