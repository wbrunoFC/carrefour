---
type: Guide
title: CI/CD, Docker e sharding
description: GitHub Actions, Jenkins, Bamboo, Docker, split de specs entre máquinas.
resource: https://webdriver.io/docs/githubactions
tags: [webdriverio, ci, docker, sharding]
timestamp: 2026-08-13T22:43:00-03:00
---

# Overview

Docs curtos de integração. Padrão: `npx wdio run <conf>` no job. Relatório: `@wdio/spec-reporter` / junit / allure.

# GitHub Actions

Guia dedicado (`GithubActions.md`) — workflow chama o testrunner. Sharding: partir specs entre machines (ver `Sharding.md` + exemplo GHA).

# Jenkins / Bamboo

Job executa WDIO; artefatos de reporter. Bamboo tem seções de teste ok vs fail no doc.

# Docker

Imagem/container com Node + browsers ou Appium. Conf aponta hostname do grid/serviço.

# Headless / Xvfb

Browser headless nativo vs Xvfb no Linux CI. Preferir headless nativo quando o browser suporta; Xvfb quando precisa display real.

# Citations

[1] [GitHub Actions](https://github.com/webdriverio/webdriverio/blob/main/website/docs/GithubActions.md)
[2] [Jenkins](https://github.com/webdriverio/webdriverio/blob/main/website/docs/JenkinsIntegration.md)
[3] [Bamboo](https://github.com/webdriverio/webdriverio/blob/main/website/docs/BambooIntegration.md)
[4] [Docker](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Docker.md)
[5] [Sharding](https://github.com/webdriverio/webdriverio/blob/main/website/docs/Sharding.md)
[6] [Headless and Xvfb](https://github.com/webdriverio/webdriverio/blob/main/website/docs/HeadlessAndXvfb.md)
