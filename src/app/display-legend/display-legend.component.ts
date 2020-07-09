import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player'

@Component({
  selector: 'app-display-legend',
  templateUrl: './display-legend.component.html',
  styleUrls: ['./display-legend.component.css']
})

export class DisplayLegendComponent implements OnInit {
  @Input() legend!: Player;

  ngOnInit(): void {
    console.log(this.legend)
  }
}
