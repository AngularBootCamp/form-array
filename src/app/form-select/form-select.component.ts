import { NgIf, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.scss',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, NgFor]
})
export class FormSelectComponent {
  @Input({ required: true }) control!: FormControl<any>;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) options!: string[];
}
