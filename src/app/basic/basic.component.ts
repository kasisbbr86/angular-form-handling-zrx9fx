import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroupDirective, Validators } from "@angular/forms";

@Component({
  selector: "app-basic",
  templateUrl: "./basic.component.html",
  styleUrls: ["./basic.component.css"]
})
export class BasicComponent implements OnInit {
  formGroup = this._fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]]
  });

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {}

  submit(form: FormGroupDirective) {
    if (form.invalid) {
      return;
    }

    console.log("submit", form.value);

    form.form.markAsPristine();
    form.resetForm();
  }
}
