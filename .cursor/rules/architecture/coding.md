# Prompt — Padrão de Programação e Engenharia de Software

Estas regras devem ser tratadas como **padrões obrigatórios de engenharia**, e não apenas como sugestões de estilo.

O objetivo principal é produzir código:

- correto;
- seguro;
- legível;
- simples;
- testável;
- sustentável;
- desacoplado;
- coeso;
- moderno;
- fácil de modificar;
- fácil de compreender por outro desenvolvedor.

---

# 1. Princípio fundamental

Sempre priorize:

1. Correção
2. Segurança
3. Legibilidade
4. Manutenibilidade
5. Testabilidade
6. Performance
7. Elegância

Código não deve ser considerado bom por ser sofisticado.

Código deve ser considerado bom quando é:

> **correto, compreensível, sustentável e simples de modificar.**

Não otimize pela menor quantidade de código escrito.

Otimize pela:

> **menor complexidade necessária para resolver corretamente o problema.**

---

# 2. Nomenclatura de variáveis

- Variáveis devem possuir nomes que representem claramente o dado armazenado.
- Não utilize nomes genéricos como `data`, `value`, `result`, `item`, `info` ou `temp` quando existir um nome mais específico.
- Prefira `precoTotal` em vez de `pt`.
- Prefira `usuarioAutenticado` em vez de `flag`.
- Prefira `quantidadeProdutos` em vez de `qtd`.
- Utilize a convenção de nomenclatura definida pela linguagem/projeto.
- Em JavaScript/TypeScript, utilize `camelCase` para variáveis.
- O nome deve começar com uma letra ou `_`, conforme permitido pela linguagem.
- Nunca inicie nomes de variáveis com números.
- Utilize somente caracteres permitidos pela linguagem.
- Evite abreviações desnecessárias.
- Abreviações amplamente conhecidas podem ser utilizadas, como `id`, `url`, `api` e `http`.
- Não utilize nomes que exijam comentários para explicar seu significado.
- Evite nomes excessivamente longos.
- O nome deve ser o menor possível sem perder significado.
- Variáveis booleanas devem representar claramente estado ou condição.

Exemplos:

```ts
isAtivo;
isAutenticado;
hasPermissao;
canEditar;
shouldRetry;
```

Evite:

```ts
status;
check;
flag;
value;
```

- Variáveis que representam quantidade devem indicar o que está sendo contado.
- Variáveis que representam valores monetários devem indicar seu significado.
- Variáveis de data devem indicar claramente o contexto.

Exemplos:

```ts
quantidadeUsuarios;
totalPedidos;
valorTotal;
precoUnitario;
dataCriacao;
dataAtualizacao;
dataExpiracao;
```

---

# 3. Constantes

- Valores que não devem mudar durante a execução devem ser declarados como constantes.
- Evite números mágicos.
- Evite strings mágicas.
- Constantes de negócio devem possuir nomes semanticamente claros.
- Não transforme todo `const` em `UPPER_SNAKE_CASE`.
- `const` representa uma referência que não será reatribuída; não significa necessariamente uma constante de negócio.

Exemplo:

```ts
const MAX_TENTATIVAS = 3;
```

Em vez de:

```ts
if (tentativas > 3) {
  ...
}
```

---

# 4. Nomenclatura de funções

- Funções devem representar ações.
- Utilize verbos.
- O nome da função deve explicar sua finalidade sem exigir leitura da implementação.
- Funções booleanas devem representar perguntas.
- Evite nomes genéricos.
- Evite funções com responsabilidades múltiplas.
- Evite efeitos colaterais inesperados.
- Evite funções com quantidade excessiva de parâmetros.

Exemplos:

```ts
calcularPreco();
validarUsuario();
buscarPedido();
criarSessao();

isUsuarioValido();
hasPermissao();
canCancelarPedido();
```

Evite:

```ts
processar();
executar();
handle();
doSomething();
```

---

# 5. Nomenclatura de classes

- Classes devem representar entidades, objetos, conceitos ou responsabilidades claramente identificáveis.
- Prefira substantivos.
- Evite classes genéricas.
- Evite classes chamadas apenas `Manager`, `Helper`, `Util` ou `Processor`.
- Classes devem possuir responsabilidade clara.
- Classes `Service` devem representar efetivamente um serviço.
- Não utilize `Service` simplesmente por falta de um nome melhor.
- Prefira funções ou módulos simples quando uma classe não for necessária.

Exemplos:

```text
Usuario
Pedido
Pagamento
AutenticacaoService
```

---

# 6. Nomenclatura de arquivos

- O nome do arquivo deve representar seu conteúdo principal.
- Evite arquivos genéricos.
- Prefira nomes específicos.
- Arquivos devem possuir responsabilidade coesa.
- Utilize uma convenção consistente em todo o projeto.

Evite:

```text
utils.ts
helpers.ts
common.ts
misc.ts
```

Prefira:

```text
date-format.ts
currency-parser.ts
user-validator.ts
```

---

# 7. Tamanho de funções

Funções devem ser pequenas o suficiente para serem compreendidas rapidamente.

Como referência:

|        Tamanho | Regra                        |
| -------------: | ---------------------------- |
|  `< 30 linhas` | Preferencial                 |
| `30–50 linhas` | Avaliar                      |
|  `> 50 linhas` | Candidata à refatoração      |
| `> 100 linhas` | Forte indicativo de problema |

Não reduza artificialmente o tamanho da função apenas para cumprir uma métrica.

Extraia funções somente quando existir uma unidade lógica clara.

---

# 8. Tamanho de arquivos

O tamanho do arquivo deve ser avaliado principalmente pela **complexidade cognitiva e coesão**, e não apenas pela quantidade de linhas.

Como referência:

|    Linhas | Avaliação                    |
| --------: | ---------------------------- |
|   `< 150` | Preferencial                 |
| `150–300` | Normal                       |
| `300–500` | Atenção                      |
| `500–800` | Candidato à refatoração      |
|   `> 800` | Forte indicativo de problema |
| `> 1.000` | Evitar                       |

Não divida arquivos artificialmente apenas para reduzir sua quantidade de linhas.

Um arquivo grande e altamente coeso pode ser melhor que vários arquivos pequenos e mal organizados.

---

# 9. Complexidade cognitiva

Todo código deve ser escrito pensando na capacidade de outro desenvolvedor compreendê-lo rapidamente.

- Prefira código explícito.
- Evite código excessivamente inteligente.
- Evite múltiplos níveis de `if`.
- Evite `if` profundamente aninhados.
- Utilize `early return`.
- Evite ternários aninhados.
- Evite expressões booleanas excessivamente complexas.
- Extraia condições complexas para funções semânticas.
- Evite abstrações prematuras.
- Evite metaprogramação quando uma solução simples resolver o problema.

Prefira:

```ts
if (podeAdministrar(usuario)) {
  ...
}
```

em vez de:

```ts
if (
  usuario &&
  usuario.ativo &&
  usuario.perfil &&
  usuario.perfil.permissoes.includes("ADMIN") &&
  !usuario.bloqueado
) {
  ...
}
```

---

# 10. Condicionais

- Prefira condições simples.
- Utilize `early return`.
- Evite `else` desnecessário após `return`.
- Evite aninhamento excessivo.
- Evite negações complexas.
- Evite comparar booleanos explicitamente.

Evite:

```ts
if (usuario.isAtivo === true)
```

Prefira:

```ts
if (usuario.isAtivo)
```

Evite:

```ts
if (!usuario.naoPodeEditar)
```

Prefira:

```ts
if (usuario.podeEditar)
```

---

# 11. Loops e iteração

Utilize os recursos modernos da linguagem quando eles tornarem a intenção do código mais clara.

Prefira:

```ts
usuarios.map((usuario) => usuario.nome);
```

em vez de:

```ts
for (let i = 0; i < usuarios.length; i++) {
	nomes.push(usuarios[i].nome);
}
```

Utilize adequadamente:

```text
map
filter
find
findIndex
some
every
reduce
for...of
```

Regras:

- Evite `for` tradicional quando uma API moderna for mais expressiva.
- Utilize `for...of` quando for necessária execução sequencial.
- Evite `forEach` quando houver necessidade de `await`.
- Não utilize `reduce` apenas para escrever código mais sofisticado.
- Prefira legibilidade.
- Evite loops aninhados.
- Evite operações `O(n)` dentro de loops `O(n)` quando uma solução mais eficiente for possível.

---

# 12. Programação assíncrona

- Prefira `async/await`.
- Evite cadeias extensas de `.then()`.
- Não utilize `await` desnecessariamente.
- Execute operações independentes em paralelo quando apropriado.
- Utilize `Promise.all` quando as operações forem independentes.
- Não utilize `Promise.all` quando houver dependência entre operações.
- Não silencie erros assíncronos.
- Utilize `try/catch` somente na camada responsável pelo tratamento do erro.

Exemplo:

```ts
const [usuario, pedidos] = await Promise.all([buscarUsuario(), buscarPedidos()]);
```

---

# 13. Tratamento de erros

- Nunca utilize `catch` vazio.
- Nunca silencie erros.
- Erros devem possuir significado.
- Utilize tipos de erro apropriados.
- Mensagens devem explicar o problema.
- Separe erros técnicos de erros de negócio.
- Não exponha informações sensíveis.
- Não utilize exceções para controlar fluxo normal da aplicação.
- Trate erros na camada responsável por decidir o comportamento.

---

# 14. Comentários

Comentários devem explicar principalmente **por que**, e não simplesmente **o que** o código faz.

Evite:

```ts
// Incrementa o contador
contador++;
```

Prefira:

```ts
// O limite é definido pela regra regulatória do produto.
contador++;
```

Regras:

- Não escreva comentários que apenas descrevem o código.
- Remova comentários obsoletos.
- Não utilize comentários para justificar código ruim.
- TODOs devem possuir contexto suficiente.
- Se um comentário é necessário para explicar uma função simples, avalie melhorar o código.

---

# 15. DRY — Don't Repeat Yourself

- Evite duplicação de lógica.
- Não confunda duplicação textual com duplicação lógica.
- Não crie abstrações apenas porque duas linhas são iguais.
- Extraia abstrações quando existir um conceito ou regra compartilhada.
- Uma regra de negócio deve possuir uma fonte principal de verdade.

---

# 16. KISS — Keep It Simple

Sempre prefira a solução mais simples que resolva corretamente o problema.

- Não introduza frameworks sem necessidade.
- Não introduza bibliotecas sem necessidade.
- Não utilize Design Patterns apenas para demonstrar conhecimento.
- Evite abstrações desnecessárias.
- Evite soluções excessivamente sofisticadas.
- Clareza é mais importante que brevidade.

---

# 17. YAGNI — You Aren't Gonna Need It

- Não implemente funcionalidades que não foram solicitadas.
- Não crie abstrações especulativas.
- Não crie interfaces "para o futuro" sem necessidade.
- Não crie configurações sem consumidores.
- Não prepare o código para cenários hipotéticos.
- Implemente o requisito atual de forma sustentável.

---

# 18. Separação de responsabilidades

Cada camada deve possuir responsabilidade claramente definida.

Modelo recomendado:

```text
Controller
    ↓
Use Case
    ↓
Domain
    ↓
Repository
    ↓
Database
```

Responsabilidades:

```text
Controller
→ Entrada e saída

Use Case
→ Orquestração do caso de uso

Domain
→ Regras de negócio

Repository
→ Persistência

Infrastructure
→ Detalhes técnicos

Presentation/UI
→ Apresentação e interação
```

Nunca:

- coloque SQL em Controller;
- coloque regras de negócio em componentes de UI;
- coloque lógica de apresentação em Repository;
- misture persistência com regras de domínio.

---

# 19. Clean Architecture

- Dependências devem apontar para dentro.
- Regras de negócio não devem depender de frameworks.
- Domain não deve conhecer banco de dados.
- Domain não deve conhecer HTTP.
- Domain não deve conhecer React, Angular, Vue ou outra tecnologia de apresentação.
- Use Cases devem depender de abstrações quando necessário.
- Infrastructure deve implementar contratos definidos pelas camadas internas.
- Frameworks devem ser tratados como detalhes externos.
- A troca do banco não deve exigir alteração das regras de negócio.
- A troca do framework de UI não deve alterar o domínio.

---

# 20. Acoplamento

O código deve possuir o menor acoplamento razoável.

- Minimize dependências entre módulos.
- Evite dependências circulares.
- Evite acesso direto a detalhes internos de outros módulos.
- Prefira contratos bem definidos.
- Utilize interfaces quando elas realmente reduzirem o acoplamento.
- Evite dependências globais.
- Evite singletons globais desnecessários.
- Mudanças locais devem produzir impactos locais sempre que possível.

Um indicador de alto acoplamento é:

> Uma pequena alteração exige modificar muitos módulos diferentes.

---

# 21. Coesão

Busque alta coesão.

- Elementos que mudam pelos mesmos motivos devem permanecer próximos.
- Elementos com responsabilidades diferentes devem ser separados.
- Classes devem possuir responsabilidades relacionadas.
- Módulos devem possuir responsabilidades relacionadas.
- Não agrupe funcionalidades apenas porque utilizam a mesma tecnologia.

---

# 22. Dependências

- Dependências devem ser explícitas.
- Evite dependências globais.
- Utilize injeção de dependência quando ela realmente reduzir acoplamento.
- Não adicione bibliotecas para problemas que a linguagem já resolve adequadamente.
- Antes de adicionar uma dependência, avalie:
    - necessidade;
    - manutenção;
    - segurança;
    - tamanho;
    - complexidade;
    - alternativa nativa.

---

# 23. Código moderno

Utilize recursos modernos, estáveis e suportados pela versão da linguagem adotada pelo projeto.

Em JavaScript/TypeScript:

- Prefira `const`.
- Utilize `let` somente quando houver reatribuição.
- Evite `var`.
- Prefira `async/await`.
- Utilize optional chaining quando melhorar a legibilidade.
- Utilize nullish coalescing quando a semântica exigir tratamento de `null`/`undefined`.
- Utilize destructuring quando melhorar a clareza.
- Prefira APIs modernas.
- Evite APIs obsoletas.
- Não utilize recursos modernos apenas por serem novos.

A prioridade deve ser:

> **modernidade + estabilidade + legibilidade.**

---

# 24. TypeScript

Quando utilizando TypeScript:

- Evite `any`.
- Prefira tipagem forte.
- Utilize inferência quando ela for suficiente.
- Declare tipos explicitamente quando aumentarem a clareza.
- Evite casts desnecessários.
- Não utilize `as` para esconder problemas de tipagem.
- Evite duplicação de tipos.
- Utilize tipos que representem corretamente o domínio.
- Evite tipos excessivamente genéricos.
- Prefira estruturas que impossibilitem estados inválidos.

---

# 25. Objetos e estruturas de dados

- Evite objetos genéricos utilizados como "saco de dados".
- Prefira contratos claros.
- Evite propriedades opcionais sem necessidade.
- Evite mutação inesperada.
- Prefira imutabilidade quando ela simplificar o raciocínio.
- Não copie objetos profundamente sem necessidade.
- Estruturas de dados devem representar o domínio.

---

# 26. APIs

- APIs devem possuir contratos claros.
- Utilize HTTP semanticamente quando aplicável.
- Utilize códigos HTTP adequados.
- Não utilize `200` para todos os cenários.
- Valide entradas na fronteira.
- Não confie em dados enviados pelo cliente.
- Mantenha formato consistente de resposta.
- Mantenha formato consistente de erro.
- Nunca exponha informações internas desnecessárias.

---

# 27. Validação

- Valide dados externos nas fronteiras do sistema.
- Separe validação estrutural de regra de negócio.
- Não confie exclusivamente na validação do frontend.
- Regras críticas devem ser protegidas no backend.
- Evite duplicação desnecessária de validações.
- Mensagens devem ser específicas.
- Evite espalhar validações sem estratégia.

---

# 28. Segurança

- Nunca armazene senhas em texto puro.
- Nunca coloque secrets no código.
- Nunca coloque tokens no repositório.
- Utilize variáveis de ambiente para informações sensíveis.
- Nunca registre tokens, senhas ou dados sensíveis em logs.
- Valide entradas externas.
- Utilize queries parametrizadas.
- Proteja contra SQL Injection.
- Proteja contra XSS.
- Utilize princípio do menor privilégio.
- Conceda somente as permissões necessárias.

---

# 29. Logs

Logs devem permitir investigação sem comprometer segurança.

Utilize níveis apropriados:

```text
debug
info
warn
error
```

Regras:

- Inclua contexto relevante.
- Não registre informações sensíveis.
- Evite excesso de logs em produção.
- Mensagens devem explicar o evento.
- Utilize correlation IDs quando necessário.
- Logs não substituem tratamento adequado de erros.

---

# 30. Testabilidade

Código deve ser projetado para ser testável.

- Evite estado global.
- Evite dependências difíceis de substituir.
- Prefira funções determinísticas.
- Isole regras de negócio.
- Permita substituição de dependências externas.
- Testes devem conseguir executar regras de negócio sem infraestrutura externa sempre que possível.
- Código difícil de testar deve ser considerado um possível sinal de alto acoplamento.

---

# 31. Testes

- Todo comportamento crítico deve possuir testes.
- Testes devem possuir nomes descritivos.
- Testes devem deixar claro:
    - contexto;
    - ação;
    - resultado esperado.

- Testes devem ser independentes.
- Testes não devem depender da ordem de execução.
- Testes devem ser determinísticos.
- Evite `sleep` fixo.
- Prefira espera baseada em condição.
- Não teste detalhes internos que não fazem parte do contrato.
- Teste comportamento e resultado.

---

# 32. Banco de dados

- Utilize queries parametrizadas.
- Evite `SELECT *` quando não houver necessidade.
- Busque somente os dados necessários.
- Evite N+1 queries.
- Utilize índices adequadamente.
- Utilize transações quando operações precisarem ser atômicas.
- Regras de integridade importantes devem ser protegidas pelo banco.
- Isole queries complexas.
- Evite colocar lógica de negócio complexa em queries sem necessidade.

---

# 33. Performance

Não realize otimizações prematuras.

Fluxo recomendado:

```text
1. Implementar corretamente
2. Medir
3. Identificar gargalo
4. Otimizar
5. Medir novamente
```

Regras:

- Evite chamadas repetidas desnecessariamente.
- Evite processamento duplicado.
- Escolha estruturas de dados adequadas.
- Considere complexidade temporal.
- Considere complexidade espacial.
- Evite `O(n²)` quando uma solução significativamente melhor for possível.
- Não sacrifique drasticamente a legibilidade por pequenas otimizações.
- Toda otimização relevante deve ser justificada por evidência.

---

# 34. Estruturas condicionais modernas

Utilize a estrutura que melhor representa a intenção.

Não substitua automaticamente todo `if` por outra estrutura.

Considere:

```text
if
switch
Map
object lookup
strategy pattern
polymorphism
```

Exemplo:

```ts
const handlers = {
	A: executarTipoA,
	B: executarTipoB,
	C: executarTipoC,
};
```

Pode ser melhor que múltiplos `if/else` quando o problema for realmente um mapeamento.

Entretanto, não transforme soluções simples em abstrações desnecessárias.

---

# 35. Estado

- Evite estado global.
- Mantenha o estado próximo de quem realmente o utiliza.
- Evite duplicar informações.
- Evite estados derivados quando puder calculá-los.
- Evite mutações inesperadas.
- Mudanças de estado devem possuir fluxo previsível.
- Busque uma única fonte de verdade.

---

# 36. Imports

- Remova imports não utilizados.
- Evite imports circulares.
- Mantenha ordenação consistente.
- Utilize aliases quando melhorarem a arquitetura.
- Evite caminhos excessivamente complexos.
- Não importe módulos pesados sem necessidade.

---

# 37. Estrutura de pastas

A estrutura deve refletir a arquitetura e, quando aplicável, o domínio.

Evite uma organização exclusivamente genérica:

```text
utils/
helpers/
services/
controllers/
models/
components/
```

Para sistemas maiores, considere organização por domínio:

```text
modules/
  users/
    domain/
    application/
    infrastructure/
    presentation/

  orders/
    domain/
    application/
    infrastructure/
    presentation/
```

Regras:

- Evite pastas genéricas que acumulam centenas de arquivos.
- Evite profundidade excessiva.
- Facilite a localização do código.
- A estrutura deve comunicar a arquitetura.

---

# 38. Código morto

Nunca mantenha código morto sem justificativa.

Remova:

- funções não utilizadas;
- imports não utilizados;
- variáveis não utilizadas;
- código comentado;
- componentes abandonados;
- APIs obsoletas.

Utilize Git para preservar histórico.

Não mantenha código antigo comentado "caso precise voltar".

---

# 39. Refatoração

- Refatore quando a complexidade dificultar manutenção.
- Não refatore sem necessidade.
- Preserve comportamento durante refatorações não funcionais.
- Prefira pequenas refatorações incrementais.
- Evite misturar refatorações grandes com mudanças funcionais quando possível.
- Execute os testes após alterações relevantes.
- Identifique explicitamente dívidas técnicas.

---

# 40. Single Responsibility Principle

Cada unidade de código deve possuir um motivo principal para mudar.

Isso se aplica a:

```text
funções
classes
módulos
componentes
services
controllers
arquivos
```

Se uma classe muda quando:

```text
regra de negócio muda
+
API muda
+
banco muda
+
interface muda
```

ela provavelmente possui responsabilidades demais.

---

# 41. Princípio do menor conhecimento

Um módulo deve conhecer somente aquilo que precisa conhecer.

Evite:

```ts
pedido.cliente.endereco.cidade.nome;
```

quando isso expõe detalhes internos desnecessários.

Quando fizer sentido, prefira uma API semântica:

```ts
pedido.getCidadeEntrega();
```

O objetivo é reduzir conhecimento estrutural e acoplamento.

---

# 42. Regra de três

Não crie abstrações prematuramente.

Use como referência:

```text
1 ocorrência
→ mantenha simples

2 ocorrências
→ avalie se existe realmente um conceito compartilhado

3 ocorrências
→ considere fortemente extrair uma abstração
```

Não aplique a regra mecanicamente.

A abstração deve representar um conceito real.

---

# 43. Code Review

Todo código deve ser revisado considerando:

- Correção
- Segurança
- Legibilidade
- Complexidade
- Acoplamento
- Coesão
- Testabilidade
- Performance
- Manutenibilidade
- Arquitetura
- Consistência
- Uso adequado da linguagem
- Uso de APIs modernas
- Ausência de código morto

Durante o review, faça a pergunta:

> **"Se eu nunca tivesse visto esse código antes, conseguiria entender rapidamente o que ele faz?"**

Se a resposta for não, investigue a existência de complexidade cognitiva desnecessária.

---

# 44. Critérios obrigatórios para código gerado por IA

Quando você estiver gerando ou modificando código:

1. Não implemente além do requisito solicitado.
2. Não invente funcionalidades.
3. Não crie abstrações especulativas.
4. Não introduza dependências sem necessidade.
5. Não utilize padrões arquiteturais apenas por estética.
6. Não reduza o número de linhas sacrificando legibilidade.
7. Não utilize soluções excessivamente inteligentes.
8. Utilize recursos modernos da linguagem.
9. Preserve a arquitetura existente quando ela estiver adequada.
10. Não altere arquivos não relacionados ao requisito sem necessidade.
11. Evite alterações de grande escala para resolver problemas locais.
12. Considere impacto arquitetural antes de modificar interfaces públicas.
13. Preserve compatibilidade quando necessário.
14. Escreva código que outro desenvolvedor consiga manter sem depender da IA.

---

# 45. Critério de decisão entre duas soluções

Quando houver mais de uma solução tecnicamente válida, escolha preferencialmente aquela que:

```text
1. Possui menor complexidade cognitiva
2. Possui menor acoplamento
3. Possui maior coesão
4. É mais fácil de testar
5. É mais fácil de modificar
6. Utiliza recursos modernos e estáveis
7. Possui menor quantidade de dependências
8. Possui menor superfície de erro
9. É suficientemente performática
10. É mais fácil de explicar para outro desenvolvedor
```

Não escolha uma solução apenas porque ela possui menos linhas.

---

# 46. Checklist obrigatório antes de finalizar código

Antes de considerar uma implementação concluída, verifique:

- [ ] Os nomes das variáveis são claros?
- [ ] Os nomes das funções representam ações?
- [ ] Os booleanos representam perguntas/estados?
- [ ] Existem abreviações desnecessárias?
- [ ] Existem números mágicos?
- [ ] Existem strings mágicas?
- [ ] Existem funções excessivamente grandes?
- [ ] Existem arquivos excessivamente grandes?
- [ ] Existe complexidade cognitiva desnecessária?
- [ ] Existem `if` excessivamente aninhados?
- [ ] É possível utilizar `early return`?
- [ ] Existe algum loop tradicional que poderia ser substituído por uma API moderna?
- [ ] Existe algum `forEach` inadequado com código assíncrono?
- [ ] Existem loops aninhados desnecessários?
- [ ] Existem funções com responsabilidades múltiplas?
- [ ] Existem responsabilidades misturadas entre camadas?
- [ ] Existe alto acoplamento?
- [ ] Existe baixa coesão?
- [ ] Existem dependências desnecessárias?
- [ ] Existem dependências circulares?
- [ ] Existe código duplicado?
- [ ] Existe código morto?
- [ ] Existem comentários desnecessários?
- [ ] Existem comentários obsoletos?
- [ ] Existem erros sendo silenciosamente ignorados?
- [ ] Existe informação sensível sendo exposta?
- [ ] Existe `any` desnecessário?
- [ ] Existem casts utilizados apenas para esconder problemas?
- [ ] Existem validações ausentes?
- [ ] Existem testes para comportamentos críticos?
- [ ] Os testes são determinísticos?
- [ ] Existe alguma otimização prematura?
- [ ] Existem problemas óbvios de complexidade algorítmica?
- [ ] O código utiliza recursos modernos da linguagem?
- [ ] A solução é realmente a mais simples que resolve o problema?
- [ ] A implementação respeita a arquitetura existente?
- [ ] A alteração possui impacto maior que o necessário?

---

# 47. Regra final

Sempre siga este princípio:

> **Escreva código para ser lido por humanos e executado por máquinas.**

O compilador/interpreter precisa entender o código, mas o principal consumidor do código ao longo de sua vida será outro desenvolvedor.

Portanto:

```text
Clareza > esperteza
Simplicidade > complexidade
Coesão > conveniência
Baixo acoplamento > dependências excessivas
Comportamento explícito > comportamento implícito
Código sustentável > código apenas funcional
```

Ao gerar código, nunca pergunte apenas:

> "Isso funciona?"

Pergunte também:

> "Isso é fácil de entender?"

> "Isso é fácil de testar?"

> "Isso é fácil de modificar?"

> "Isso introduz acoplamento desnecessário?"

> "Existe uma solução mais simples?"

> "Estou utilizando a versão moderna e apropriada da linguagem?"

> "Outro desenvolvedor conseguiria manter esse código sem precisar perguntar ao autor ou à IA como ele funciona?"

Se a resposta para alguma dessas perguntas for negativa, avalie a possibilidade de refatoração antes de considerar a implementação concluída.
