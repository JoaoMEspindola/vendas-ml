import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ProdutosService } from '../../../../services/produtos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  private service = inject(ProdutosService);
  private snackBar = inject(MatSnackBar);

  @Input() image: string = '';
  @Input() name: string = '';
  @Input() reference: string = '';
  @Input() amount: number = 0;
  @Input() brand:string = '';
  @Input() id: string ='';

  @Input() produto: any;
  @Output() delete = new EventEmitter<string>();

  onDelete(id: string) {
    this.delete.emit(id);
  }

}
