import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidatorService } from 'src/app/services/form-validator.service';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ContactService } from 'src/app/services/contact.service';
import { legalModal } from 'src/app/helpers/legal-modal.helper';
import { IDataForm } from 'src/app/models/form-data.interface';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm: FormGroup = this.fb.group({
    nombre: [, Validators.required],
    email: [, [Validators.required, Validators.pattern(this.fv.emailPattern)]],
    asunto: [, Validators.required],
    mensaje: [, Validators.required],
    aviso_legal: [, Validators.required]
  });

  errorClass = 'form__error form__error--visible';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    public dialog: MatDialog,
    private contact: ContactService,
    private fb: FormBuilder,
    private fv: FormValidatorService,
    private snackBar: MatSnackBar
  ) { }

  getErrorMsg(controlName: string) {
    return this.fv.getErrorMsg(controlName, this.contactForm);
  }

  fieldInvalid(fieldName: string) {
    return this.fv.fieldInvalid(fieldName, this.contactForm);
  }

  send() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    if (!this.contactForm.get('aviso_legal')?.value) {
      this.sendSnackBar('Debes aceptar el aviso legal', 'snackbar--warning');
      return;
    }

    const { nombre, email, asunto, mensaje } = this.contactForm.value;
    const data: IDataForm = {
      name: nombre,
      email,
      subject: `Portfolio: ${asunto}`,
      message: mensaje
    }

    this.contact.sendEmail(data).subscribe({
      next: () => {
        this.sendSnackBar('Mensaje enviado', 'snackbar--success');
        this.contactForm.reset();
      },
      error: (error) => {
        this.sendSnackBar('No se ha podido enviar el mensaje', 'snackbar--warning');
        console.log(error);
      }
    })
  }

  sendSnackBar(message: string, className: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: [className]
    })
  }

  openDialog() {
    legalModal(this.dialog, true, this.contactForm);
  }

}
