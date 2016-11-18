import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NotificationService } from './notificationService';
import { Injectable } from '@angular/core';

export class Notificacion {
  id: number;
  curso: string;
  nivel: string;
  fecha: string;
  hora: string;
  dias: string;
  salon: string;
}

@Component({
  selector: 'my-app',
  providers: [NotificationService],
  template: `
  <header>
    <div class="container">
      <h1>Comunicaciones Idiomas</h1>
    </div>

    <div class="container">
      <!-- Static navbar -->
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Opciones</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Home</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Personas <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Registrar</a></li>
                  <li><a href="#">Modificar</a></li>
                  <li><a href="#">Eliminar</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cursos <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Añadir</a></li>
                  <li><a href="#">Modificar</a></li>
                  <li><a href="#">Eliminar</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Notificacion <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Enviar</a></li>
                  <li><a href="#">Historial</a></li>
                </ul>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li class="active"><a href="login/login.html">Salir</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
      </nav>
    </div> <!-- /container -->
    </header>
    <div class="container">
        <section class="main row">

          <div class="col-md-12">
            Curso: <input [(ngModel)]="notificacion.curso" placeholder="Curso Inglés Adultos" style = "width: 410px;"><br><br>
          </div>

          <div class="col-md-12">
            Nivel: <input [(ngModel)]="notificacion.nivel" placeholder="Nivel 8" style = "width: 410px;"><br><br>
          </div>

          <div class="col-md-12">
            Fecha: <input [(ngModel)]="notificacion.fecha" placeholder="Fecha inicio: 28/09/2016" style = "width: 410px;"><br><br>
          </div>

          <div class="col-md-12">
            Hora: <input [(ngModel)]="notificacion.hora" placeholder="Hora: 10-12" style = "width: 410px;"><br><br>
          </div>

          <div class="col-md-12">
            Días: <input [(ngModel)]="notificacion.dias" placeholder="L,W,V" style = "width: 410px;"><br><br>
          </div>

          <div class="col-md-12">
            Salón: <input [(ngModel)]="notificacion.salon" placeholder="Salón: 1-701" style = "width: 410px;"><br><br>
          </div>

          <div class="col-md-12">
            <button class="btn btn-primary" (click)="enviarNotificacion(notificacion)">Enviar notificacion</button>
          </div>
        </section>
    </div>

    <div align="center"> <img src="../logo_idiomas_eafit.png"> </div>

  `
})

export class AppComponent {

  notificacion: Notificacion = {
    id: 1,
    curso: '',
    nivel: '',
    fecha: '',
    hora: '',
    dias: '',
    salon: ''
  };

  constructor(notificationService: NotificationService) {
  }

  enviarNotificacion : function(notificacion) {
     notificationService.enviarNotificacion(notificacion);
  }
}
