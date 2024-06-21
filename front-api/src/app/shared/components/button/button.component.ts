import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() path: string = '';
  @Input() label: string = '';

}
