import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { legalModal } from 'src/app/helpers/legal-modal.helper';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date();

  constructor(
    public dialog: MatDialog
  ) { }

  openDialog() {
    legalModal(this.dialog, false, null);
  }
}
