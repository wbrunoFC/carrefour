# Appium 1 vs 2 vs 3 — o que mudou

Muitos problemas vêm de seguir setup escrito para versão antiga. O Appium mudou bastante.

| Versão | Modelo |
|--------|--------|
| **Appium 1** | Servidor + drivers comuns no mesmo pacote |
| **Appium 2** | Drivers e plugins separados do core; gerenciados via CLI |
| **Appium 3** | Mesma arquitetura modular; remove mais legado; setup mais moderno |

**Recomendação:** projetos novos → **Appium 3**. Projetos 1 ou 2 não precisam migrar na hora, salvo bloqueio, atraso ou manutenção difícil.

- Migração 1 → 2: maior esforço (mudança de modelo servidor/driver) — ver [guia oficial](https://appium.io/docs/en/2.0/guides/migrating-1-to-2/)
- Migração 2 → 3: upgrade menor — ver [guia oficial](https://appium.io/docs/en/3.4/guides/migrating-2-to-3/)

## Comparativo prático

| Aspecto | Appium 1 | Appium 2 | Appium 3 | O que fazer agora |
|---------|----------|----------|----------|-------------------|
| Setup | Mais “tudo junto” | Modular: servidor e drivers separados | Modular, com menos legado | Instalar Appium, depois só os drivers necessários |
| Drivers | Quase embutidos | CLI (`appium driver install …`) | Mesmo modelo; compatibilidade de versões importa mais | `uiautomator2`, `xcuitest`; `appium driver list --installed` |
| Android | Guias antigos: UiAutomator, Selendroid | UiAutomator2 e Espresso separados | UiAutomator2 padrão para UI | Preferir UiAutomator2; Espresso só se precisar |
| iOS | UIAutomation / bootstrap antigo | XCUITest separado | XCUITest padrão | Usar XCUITest; evitar UIAutomation |
| Protocolo | JSON Wire / Mobile JSON Wire | Só W3C WebDriver | W3C mais estrito | Clients atuais compatíveis com W3C |
| Capabilities | “Desired Capabilities” sem prefixo | Prefixo `appium:` | Idem, validação mais rígida | `appium:automationName`, `appium:deviceName`, `appium:app` |
| Plugins | Pouco usados | Parte do ecossistema | Opcionais | Só se houver necessidade clara |
| Desktop / Inspector | Appium Desktop comum | Appium Inspector separado | Inspector + CLI | CLI para servidor/drivers; Inspector para elementos |
| Risco | Exemplos antigos “quase” funcionam | Drivers faltando e capabilities sem prefixo | Endpoints/clients/capabilities velhos | Atualizar setup antes de depurar lógica do teste |

## Takeaway

Não trate Appium como uma ferramenta mobile “tudo em um”. Instale o servidor, instale os drivers certos, use capabilities W3C e mantenha servidor, drivers e clients alinhados.

## Próximo

→ [04-instalacao.md](./04-instalacao.md)
