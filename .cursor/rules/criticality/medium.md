# Criticidade MEDIUM

Nível intermediário. Falha **não bloqueia** o produto inteiro, mas degrada operação ou experiência de forma relevante.

Decisão: seguir [decision.md](./decision.md). Chega a `MEDIUM` só se nenhum critério [HIGH](./high.md) se aplicar.

## Definição

Funcionalidade relevante afetada, com impacto operacional ou de UX em parcela significativa de usuários. Pode existir alternativa, porém limitada ou ruim. Importante, não essencial à sobrevivência do fluxo crítico.

## Critérios (após descartar HIGH)

- Impacta uma funcionalidade relevante.
- Afeta parte significativa dos usuários.
- Existe impacto operacional.
- Existe impacto na experiência do usuário.
- Existe alternativa, mas ela é ruim ou limitada.
- A funcionalidade é importante, mas não essencial.

## Implicações para automação

- Incluir na regressão completa; opcional no smoke.
- Pode começar por uma plataforma e expandir depois.
- Documentar workaround conhecido no teste ou na feature.

## O que não é MEDIUM

- Bloqueio de login, fraude, dados sensíveis, compliance → [HIGH](./high.md).
- Cosmético, baixa frequência, alternativa simples → [LOW](./low.md).
