import { Pipe, PipeTransform } from "@angular/core";
import { FormGroupDirective } from "@angular/forms";

@Pipe({
  name: "fieldValidator",
  pure: false
})
export class FieldValidatorPipe implements PipeTransform {
  transform(
    form: FormGroupDirective,
    controlName: string,
    validator: string
  ): boolean {
    const formGroup = form.form;
    return (
      (form.submitted || formGroup.get(controlName).touched) &&
      formGroup.get(controlName).hasError(validator)
    );
  }
}
