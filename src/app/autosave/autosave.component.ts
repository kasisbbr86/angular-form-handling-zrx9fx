import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of, Subject } from 'rxjs';
import {
  concatMap,
  debounceTime,
  delay,
  mergeMap,
  switchMap,
  takeUntil,
  tap,
  timeout,
} from 'rxjs/operators';

@Component({
  selector: 'app-autosave',
  templateUrl: './autosave.component.html',
  styleUrls: ['./autosave.component.css'],
})
export class AutosaveComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  savingStatus: string;

  formGroup = this._fb.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    location: [''],
    // password: ["", [Validators.required, Validators.minLength(8)]]
  });

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup.valueChanges
      .pipe(
        takeUntil(this._destroy$),
        debounceTime(500),
        concatMap((value) => this.save(value)),
        tap(console.log)
      )
      .subscribe((value) => {
        console.log('subscribed: ' + value);
        this.savingStatus = 'saved';
      });
  }

  save(value) {
    this.savingStatus = 'saving..';
    console.log(this.formGroup.dirty);
    console.log(this.formGroup.status);
    if (this.formGroup !== undefined && this.formGroup?.status === 'VALID') {
      return of(`Saved: ${JSON.stringify(value)}`).pipe(
        tap(() => console.log('started')),
        delay(1000)
      );
    }
    return of(`Not Saved: ${JSON.stringify(value)}`);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
