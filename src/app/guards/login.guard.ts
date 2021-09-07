import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate() {
    // si en localstorage tenemos token significa que estoy logado
    if (localStorage.getItem('token') !== null) {
      return true;
    } else {
      // si no hay token, no estoy logado y false no permite acceder a la ruta
      return false;
    }
  }
}
