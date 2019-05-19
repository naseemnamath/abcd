import { Injectable } from '@angular/core';

export interface User{
  name : string;
  id : number
}

@Injectable({
  providedIn: 'root'
})
export class UseriaService {

  constructor() { }

  users: User[] = [
    {
      name: 'dfgh', id: 101
    },
    {
      name: 'sadfg', id: 102
    }
  ]
}
