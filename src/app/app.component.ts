import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  conteudo = [
      {
        'title': 'O html',
        'content': `HTML (Linguagem de Marcação de Hipertexto) é o código que você usa 
        para estruturar uma página web e seu conteúdo. Por exemplo, o conteúdo pode ser estruturado 
        em parágrafos, em uma lista com marcadores ou usando imagens e tabelas. Como o título sugere,
        este artigo fornecerá uma compreensão básica do HTML e suas funções.`
      },
      {
        'title':'O css',
        'content': `CSS (Folha de Estilo em Cascata) é o código que você usa para dar estilo à sua 
        página Web. CSS básico apresenta tudo que você precisa para começar. Responderemos a perguntas do 
        tipo: Como mudo meu texto para preto ou vermelho? Como faço para que meu conteúdo
         apareça em determinados lugares na tela? Como decoro minha página com imagens e cores de fundo?`
      },
      {
        'title':'O Javascript',
        'content': `JavaScript é uma linguagem de programação que permite a você implementar itens 
        complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar 
        a você informação estática — mostrando conteúdo que
         se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc.`
      },
  ]
}
