import { CanActivateFn, CanMatchFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
    if(localStorage.getItem('token') == 'true'){
      return true
    }else{
      return false;
    }
  
  };

export const BibliotecarioGuard: CanMatchFn = (route, state) => {
    if(localStorage.getItem('admin') == 'true'){
      return true
    }else{
      return false;
    }
    
  };
