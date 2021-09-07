import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(pForm: any) {
    const result = await this.usersService.login(pForm.value);
    //console.log(result)
    //Guardamos el token en el localStorage //
    if (result.token) {
      localStorage.setItem('token', result.token);
      // y redirigimos a perfil //
      this.router.navigate(['/profile']);
    }
    else {
      alert('Usuario o contraseña erroneos')
    }
    //console.log(pForm.value)
  }
}
