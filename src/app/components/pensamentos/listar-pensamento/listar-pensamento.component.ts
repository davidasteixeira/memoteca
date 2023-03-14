import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente Filho',
      modelo: 'modelo3'
    },
    {
      conteudo: `Os Estados-Nações, ou propriamente dito países, surgiram principalmente no fim do século XVIII início do século XIX. Foram constituídos a partir do processo de industrialização original e/ou clássica com mecanismo de divisão do espaço geográfico internacional, estabelecendo uma nova configuração política e espacial, tudo isso é fruto da burguesia e revolução industrial que contribuiu para proteger o mercado de um determinado território`,
      autoria: 'Componente',
      modelo: 'modelo1'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
