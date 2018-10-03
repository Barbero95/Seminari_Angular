import { Component, OnInit } from '@angular/core';
import { Object } from '../object';
import {UsersService} from "../users.service";


@Component({
  selector: 'app-obj-details',
  templateUrl: './obj-detail.component.html',
  styleUrls: ['./obj-detail.component.css']
})
export class ObjDetailsComponent implements OnInit {

  object: Object = {id: 0, nombre:"default", tipo: "default", descripcion: "default", valor: 0, coste: 0};
  id: number;
  //private userService: UsersService;

  constructor(
    private userService: UsersService
    ) {}

  ngOnInit() {
  }

  getInfoObj(): void{
    this.userService.getObj(this.id)
    .subscribe(object => this.object = object);
  }

}
