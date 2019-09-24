import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email = "";
  public password = "";

  constructor(private loginService: LoginService) {

  }

  ngOnInit() {
  }

  autenticar() {
    email: this.email
    password: this.password
    
    if (this.email === "" || this.password === "") {
      alert("Datos erroneos");
      return;
    };
    //this.loginService.autenticarService(' Melissa')
    console.log('Autenticando')
    this.loginService.signIn(this.email, this.password)
      .subscribe(dataFinal => {
      console.log(dataFinal)
    }, error => {
      console.log(error)
    });
  }
}
