import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UsersService} from "../users.service";

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  obj: Object;
  user: User;
  nameSearch: string;
  //private userService: UsersService;
  constructor(
    private userService: UsersService
    //private location: Location,
    //private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.user = {nombre:"default", password: "default", vida: 0, ataque: 0, defensa: 0, resistencia:0,
    money: 0, posX: 0, posY: 0, mapaActual: 0, objetoList: [this.obj] }
  }

  getInfoUser(): void{
    this.userService.getUser(this.nameSearch)
      .subscribe(user => this.user = user);
  }
}
