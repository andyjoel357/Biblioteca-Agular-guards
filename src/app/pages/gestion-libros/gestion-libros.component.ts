import { Component } from '@angular/core';
import { TablaLibrosComponent } from '../../component/tabla-libros/tabla-libros.component';

@Component({
  selector: 'app-gestion-libros',
  standalone: true,
  imports: [TablaLibrosComponent],
  templateUrl: './gestion-libros.component.html',
  styleUrl: './gestion-libros.component.css'
})
export class GestionLibrosComponent {

}
