import { Component, Input } from '@angular/core';

@Component({
  selector: `my-button`,
  templateUrl: `./button.component.html`,
  styleUrls: [`./button.component.css`],
})
export class Button {
  @Input() Label: string = '';
  buttonText: string = 'Acessar';
  buttonTexts: string[] = ['vender', 'comprar'];
  buttonNumber: number = 1;
  buttonObj = {
    label: 'adicionar ao carrinho',
  };
}
