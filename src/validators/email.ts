import { FormControl } from '@angular/forms';

export class EmailValidator {

  static isValid(control: FormControl){
    //je mag kleine letters en grote letters opgeven maar ook getallen.
    //Ze moeten meer dan 6 karakters opgeven
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);

    if (re){
      return null;
    }

    return {
      "invalidEmail": true
    };

  }
}