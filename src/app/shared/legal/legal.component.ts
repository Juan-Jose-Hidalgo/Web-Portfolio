import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent {

  showButtons: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.showButtons = data.showButtons;
  }

}
