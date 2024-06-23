import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProdutosService } from '../home/services/produtos.service';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatToolbarModule, MatButtonModule, MatSnackBarModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  constructor(private formBuilder: FormBuilder,
      private service:ProdutosService,
      private snackBar:MatSnackBar) {
    this.form = this.formBuilder.group({
      name: [null],
      reference: [null],
      amount: [null],
      brand: [null],
      image: [null]
    });
  }
  onCancel(){
    
  }
  onSubmit() {
    this.service.save(this.form.value)
    .subscribe(
      result => this.snackBar.open('Produto salvo com sucesso', '', {duration: 3000}),
      error => this.snackBar.open('Erro ao salvar produto', '', {duration: 3000})
    );
  }

  form: FormGroup;


}
