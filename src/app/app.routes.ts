import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { PrestamoComponent } from './pages/prestamo/prestamo.component';
import { GestionLibrosComponent } from './pages/gestion-libros/gestion-libros.component';
import { GestionUsuariosComponent } from './pages/gestion-usuarios/gestion-usuarios.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { BibliotecarioGuard, loginGuard} from './guard/login.guard';
import { DetalleUsuarioComponent } from './pages/detalle-usuario/detalle-usuario.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'catalogo', component:CatalogoComponent, canActivate:[loginGuard]},
    {path:'prestamos', component:PrestamoComponent, canActivate:[loginGuard]},
    {path:'gestionLibros', component:GestionLibrosComponent, canMatch:[BibliotecarioGuard] },
    {path:'gestionUsuarios', component:GestionUsuariosComponent,canMatch:[BibliotecarioGuard] },
    {path:'login', component:LoginComponent},
    {path:'registro', component:RegistroComponent},
    {path:'contactos', component:ContactosComponent, canActivate:[loginGuard]},
    {path: 'editar/:idLibros', component: EditarComponent},
    {path:'detalle/:idDetalle', component:DetalleUsuarioComponent},

    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'**', component:Error404Component}
];
