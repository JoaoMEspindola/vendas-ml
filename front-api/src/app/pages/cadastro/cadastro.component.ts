import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProdutosService } from '../../services/produtos.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Produto } from '../../model/produto';



@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatToolbarModule, MatButtonModule, MatSnackBarModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  private route = inject(ActivatedRoute);
  

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service:ProdutosService,
              private snackBar:MatSnackBar)
  {
    this.form = this.formBuilder.group({
      id: '',
      name: '',
      reference: '',
      amount: '',
      brand: '',
      image: ''
    });

    const product: Produto = this.route.snapshot.data['product'];
    this.form.setValue({
      id: product.id,
      name: product.name,
      reference: product.reference,
      amount: product.amount,
      brand: product.brand,
      image: product.image
    })
  }
  onSubmit() {
    this.service.save(this.form.value)
    .subscribe(
      result => this.snackBar.open('Produto salvo com sucesso', '', {duration: 3000}),
      error => this.snackBar.open('Erro ao salvar produto', '', {duration: 3000})
    );
  }

}
