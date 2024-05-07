import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'GWRS GAMES';
  mostrarMenu:boolean = true;

  constructor(private _LoginService: LoginService){}


  ngOnInit(): void {
    this._LoginService.getMostrarMenu().subscribe(
      res => {this.mostrarMenu = res; }

    )
  }

  ngOnDestroy(){
    localStorage.clear();
  }

}
