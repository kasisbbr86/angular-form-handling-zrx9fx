import { Component } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroupDirective,
  ValidationErrors,
  Validators
} from "@angular/forms";
import { Observable, of, Subject } from "rxjs";
import { delay } from "rxjs/operators";

@Component({
  selector: "app-async",
  templateUrl: "./async.component.html",
  styleUrls: ["./async.component.css"]
})
export class AsyncComponent {
  private _destroy$ = new Subject<void>();

  formGroup = this._fb.group({
    email: [
      "",
      {
        validators: [Validators.required, Validators.email],
        asyncValidators: [this.checkEmail().bind(this)],
        updateOn: "blur"
      }
    ]
  });

  constructor(private _fb: FormBuilder) {}

  save(form: FormGroupDirective) {
    if (form.invalid) {
      return;
    }

    console.log("started save", form.value);
    form.resetForm();
    form.form.markAsPristine();
  }

  checkEmail() {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      console.log("validation");
      if (control.value.endsWith(".asd")) {
        return of({ domainError: true }).pipe(delay(2000));
      }
      return of(null).pipe(delay(2000));
    };
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
