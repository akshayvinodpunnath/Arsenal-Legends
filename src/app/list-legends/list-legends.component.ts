import { Component, OnInit } from '@angular/core';
import { PLAYERS } from '../players';
import { Player } from '../player';

@Component({
  selector: 'app-list-legends',
  templateUrl: './list-legends.component.html',
  styleUrls: ['./list-legends.component.css']
})

export class ListLegendsComponent implements OnInit {
  // Import player list

  legends = PLAYERS;
  selectedLegend!: Player;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(legend: Player): void {
    this.selectedLegend = legend;
  }

}
