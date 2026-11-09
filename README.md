# Playwright · Coffee Cart (cardápio, carrinho e promoção)

Testes automatizados de interface com **Playwright + JavaScript** para o **[Coffee Cart](https://coffee-cart.app)**, uma loja de café usada em treinamento de QA.

São 4 exercícios do módulo *Playwright Test Automation Core* da Mate Academy, terminando com toda a suíte reorganizada em **Page Object Model**.

> Este repositório registra meus **estudos de automação**. Meu foco profissional hoje é QA manual (web, mobile e API). Veja o portfólio completo em **[sealtiey.github.io](https://sealtiey.github.io)**.

## Exercícios

| # | Pasta | O que pratiquei |
|---|---|---|
| 1 | [`01-locators`](01-locators) | Encontrar locators estáveis para adicionar Cappuccino e Espresso ao carrinho |
| 2 | [`02-cart-tests`](02-cart-tests) | 5 cenários de carrinho: botões +/−, limpeza após refresh, promoção do Mocha aceita e recusada |
| 3 | [`03-assertions`](03-assertions) | Asserções de preço, total, item no carrinho e remoção |
| 4 | [`04-page-object-model`](04-page-object-model) | **Page Object Model**: completei os page objects `MenuPage` e `CartPage` usados por uma suíte de 14 testes organizada por funcionalidade |

## Cenários cobertos

- Preço correto de cada bebida no cardápio
- Bebida adicionada ao carrinho e somada ao total
- Remoção de item e mensagem de carrinho vazio
- Quantidade atualizada pelos botões + e −
- Carrinho limpo após recarregar a página
- Promoção: Mocha com desconto entra no carrinho ao aceitar e não entra ao recusar

## Como ver o que eu fiz

Cada exercício tem **2 commits**: o template original da Mate Academy e, em seguida, a minha solução. Abra o histórico e clique em um commit **"Solução: …"** para ver o código que escrevi.

## Como rodar

```bash
cd 04-page-object-model   # ou qualquer outra pasta
npm ci
npx playwright install
npx playwright test
npx playwright show-report
```

**Ferramentas:** Playwright · JavaScript · Node.js · Git
