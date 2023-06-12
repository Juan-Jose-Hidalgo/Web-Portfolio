import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() { }

  /**
   * Checks if a form field is valid.
   * 
   * @param name The name of the form field.
   * @param form The FormGroup object containing the form fields.
   * @returns A boolean value indicating if the field is valid.
   */
  fieldInvalid(name: string, form: FormGroup) {
    return form.controls[name]?.errors && form.controls[name]?.touched;
  }

  /**
   * Returns an error message for a given control name in a reactive form.
   * 
   * @param controlName The name of the control to retrieve the error message for.
   * @returns The error message for the specified control, or an empty string if there are no errors.
   */
  getErrorMsg(controlName: string, form: FormGroup) {
    // Get the errors for the specified control.
    const error = form.get(controlName)?.errors;

    // Define a dictionary mapping error keys to error messages.
    const messages: Record<string, string> = {
      required: `El campo ${controlName} es obligatorio`,
      pattern: `Formato de ${controlName} no válido`,
    };

    // Map the error keys to their corresponding messages if they exist, and filter out any that are falsy.
    return Object.keys(messages)
      .map((key) => error?.[key] && messages[key])
      .filter(Boolean)
      .join('. ');
  }
}
