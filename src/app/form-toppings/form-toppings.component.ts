import { NgIf, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormArray,
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-form-toppings',
  templateUrl: './form-toppings.component.html',
  styleUrl: './form-toppings.component.scss',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule]
})
export class FormToppingsComponent {
  @Input({ required: true }) toppings!: FormArray<
    FormControl<string>
  >;

  get toppingControls() {
    return (this.toppings.controls ?? []) as FormControl[];
  }

  constructor(private fb: NonNullableFormBuilder) {}

  addNewTopping() {
    this.toppings.push(this.fb.control(''));
  }

  removeTopping(toppingIndex: number) {
    this.toppings.removeAt(toppingIndex);
  }
}
