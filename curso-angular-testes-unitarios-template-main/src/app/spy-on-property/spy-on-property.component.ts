import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spy-on-property',
  templateUrl: './spy-on-property.component.html',
  styleUrls: ['./spy-on-property.component.scss']
})
export class SpyOnPropertyComponent implements OnInit {

  mensagem: any = 'Olá, Mundo!';

  constructor() { }

  ngOnInit(): void {
  }

  get message(): any {
    return this.mensagem;
  }

}
