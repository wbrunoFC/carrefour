# Quando não usar Appium

Appium brilha em jornadas mobile importantes em que UI, device e comportamento de plataforma importam. Não use para toda validação: testes de UI são mais lentos e caros de manter que camadas mais baixas.

## Evite Appium quando

- **Camadas mais rápidas cobrem o check** — unit, API, component ou integration bastam se não precisa da UI mobile.
- **Precisa de acesso interno ao app** — Appium age de fora, como usuário; não é ideal para métodos privados, estado de memória ou eventos internos.
- **Objetivo é comparação visual** — use ferramenta de visual testing (pixel, espaçamento, cor, diff de screenshot).
- **Tela ainda muda o tempo todo** — espere IDs estáveis antes de cobrir com Appium.
- **Prioridade absoluta é velocidade** — Appium serve E2E; é pesado para checks pequenos de feedback rápido.
- **Só valida lógica de backend** — regras de negócio, cálculos e APIs ficam abaixo da UI.
- **Fluxo depende de hardware e só há emulador/simulador** — valide em device real antes do release.

## Conclusão

Appium em 2026 funciona melhor com setup atual: Appium 3, drivers de plataforma, capabilities W3C, localizadores estáveis e esperas explícitas.

Falhas iniciais mais comuns: driver faltando, formato antigo de capability, localizador frágil, gaps no setup do device.

Use Appium onde UI, device e plataforma afetam qualidade de release. Separe config Android/iOS, capture logs e screenshots em falha, e valide fluxos críticos em devices reais antes de publicar.

## Índice

← Voltar ao [README.md](./README.md)
