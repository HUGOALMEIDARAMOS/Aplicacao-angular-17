import { Component, EventEmitter, input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Produto } from '../../interfaces/producto.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, FormsModule, MatFormFieldModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

  form!: FormGroup;
 @Output() done = new EventEmitter<Produto>();
  product = input<Produto | null>(null);

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl<string>(this.product()?.title ?? '', {
        nonNullable: true,
        validators: Validators.required
      })
    });
  }

  onSubmit(){
    const produto = this.form.value as Produto;
    this.done.emit(produto);
  }

}
