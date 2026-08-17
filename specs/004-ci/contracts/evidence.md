# Contract: pacote de evidência

Após a corrida (sucesso ou falha), MUST existir artefato baixável.

| Item | Obrigatório |
|------|-------------|
| Resumo da execução | sim |
| Prints de falha | sim, quando houver falha |
| Logs | sim |
| Info de ambiente (`TARGET`, versão Node) | sim |

Fonte: `project/tests/results/` gerado pelo Allure já configurado.

MUST publicar mesmo quando o step de teste falha (`if: always()`).

MUST NOT exigir segundo reporter.
