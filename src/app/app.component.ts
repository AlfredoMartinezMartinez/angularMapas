import { Component } from '@angular/core';
import {MapasService} from './providers/mapas.service';
import {Marcador} from './interfaces/marcador.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 38.990439;
  lng: number = -3.919896;
  zoom:number = 16;

  marcadorSel:any=null;
  draggable:string="1";
  constructor(public _ms:MapasService){
    this._ms.cargarMarcadores();

  }
  clickMapa(evento){
    let nuevoMarcador:Marcador={
      lat:evento.coords.lat,
      lng:evento.coords.lng,
      titulo:"",
      draggable:true
    }
    // console.log(evento);
    this._ms.insertarMarcador(nuevoMarcador);
  }
  clickMarcador(marcador:Marcador,i :number){
    console.log(marcador,i);
    this.marcadorSel= marcador;
  }

  dragEndMarcador(marcador:Marcador,evento){
    console.log(marcador,evento);
    let lat=evento.coords.lat;
    let lng= evento.coords.lng;
    marcador.lat=lat;
    marcador.lng=lng;
    this._ms.guardarMarcadores();
  }

  cambiarDraggable(){
    if(this.draggable=="1"){
      this.marcadorSel.draggable= true;
    }else{
      this.marcadorSel.draggable=false;
    }


  }

}
