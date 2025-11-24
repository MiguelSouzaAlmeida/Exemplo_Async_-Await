# Exemplo_Async_-Await
Exemplo prático de Async e Await
Miguel Souza Almeida, Matheus Molon, Lucas M, Lucas B, Kaique 
## 🔧 Resumo da Função

Este projeto demonstra o uso de `async` e `await` no JavaScript para buscar dados de forma assíncrona e preencher automaticamente campos de texto em uma página HTML.

A função `pegarDados()` simula uma requisição a uma API, retornando um objeto JSON após um pequeno atraso. Já a função `carregarDados()` utiliza `await` para aguardar a resposta dessa "API" sem travar a interface do usuário.

Quando os dados são recebidos, eles são inseridos nos campos de entrada (`nome`, `email` e `idade`) por meio do DOM. Todo o processo está envolvido em um bloco `try/catch`, garantindo uma execução segura e permitindo capturar possíveis erros.

Este exemplo serve como uma forma simples e prática de compreender como operações assíncronas funcionam no JavaScript e como aplicar esses dados diretamente no front-end.
