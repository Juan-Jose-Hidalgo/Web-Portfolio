import { FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { LegalComponent } from "../shared/legal/legal.component";

/**
 * Opens a legal modal dialog with customizable options.
 *
 * @param dialog - The MatDialog service used to open the modal.
 * @param buttons - A boolean indicating whether to show the buttons in the modal.
 * @param form - An optional FormGroup instance used to update the `aviso_legal` form control upon modal close.
 */
export const legalModal = (dialog: MatDialog, buttons: boolean, form: FormGroup | null) => {
    const dialogRef = dialog.open(LegalComponent, {
        data: { showButtons: buttons }
    });

    //Subscribe to the `afterClosed` event to update the `aviso_legal` form control value upon modal close.
    //This is only done if the `buttons` parameter is truthy.
    if (buttons) {
        dialogRef.afterClosed().subscribe(result => {
            form!.get('aviso_legal')?.setValue(result);
        });
    }
}