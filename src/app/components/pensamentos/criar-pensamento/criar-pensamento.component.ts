import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  constructor() { }

  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo:'modelo1'
  }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert('Pensamento Salvo!')
  }

  cancelarPensamento() {
    alert('Pensamento descartado!')
  }

}
