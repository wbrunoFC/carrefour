# Criticidade LOW

Nível mínimo. Falha **não** ameaça segurança, receita nem jornada crítica; impacto pequeno e/ou raro.

Decisão: seguir [decision.md](./decision.md). Só `LOW` se HIGH e MEDIUM forem descartados.

## Definição

Problema de baixo impacto funcional, poucos usuários, baixa frequência, alternativa simples disponível, sem risco financeiro/segurança/compliance relevante — muitas vezes visual ou cosmético.

## Critérios (após descartar HIGH e MEDIUM)

- Impacto funcional pequeno.
- Baixa frequência.
- Poucos usuários afetados.
- Existe alternativa simples.
- Não existe impacto financeiro relevante.
- Não existe risco de segurança / compliance.
- Problema predominantemente visual ou cosmético.

## Implicações para automação

- Não obrigatório no smoke.
- Automatizar só se custo baixo e estabilidade alta; senão, checklist manual / visual.
- Não atrasar release por falha LOW isolada (salvo política explícita do time).

## O que não é LOW

- Qualquer risco de segurança, fraude, compliance ou perda financeira → [HIGH](./high.md).
- Feature relevante com impacto operacional/UX amplo → [MEDIUM](./medium.md).
