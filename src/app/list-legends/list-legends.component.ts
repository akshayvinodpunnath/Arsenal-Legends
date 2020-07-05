import { Component, OnInit } from '@angular/core';
import { PLAYERS } from '../players';

@Component({
  selector: 'app-list-legends',
  templateUrl: './list-legends.component.html',
  styleUrls: ['./list-legends.component.css']
})
export class ListLegendsComponent implements OnInit {
  // Import player list
  legends = PLAYERS;
  constructor() { }

  ngOnInit(): void {
  }

}
