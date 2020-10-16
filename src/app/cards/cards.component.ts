import { Component, OnInit } from '@angular/core';
import { ScriptManagerService } from '../script-manager.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  constructor(private ScriptManager: ScriptManagerService) {}

  ngOnInit(): void {
    this.ScriptManager.cargarScript(['getData']);
  }
}
