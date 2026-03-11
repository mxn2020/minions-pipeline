![CI](https://github.com/mxn2020/minions-pipeline-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-pipeline

**Funnel stage tracking across the full job search lifecycle**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-pipeline/sdk minions-sdk

# Python
pip install minions-pipeline

# CLI (global)
npm install -g @minions-pipeline/cli
```

---

## CLI

```bash
# Show help
pipeline --help
```

---

## Python SDK

```python
from minions_pipeline import create_client

client = create_client()
```

---

## Project Structure

```
minions-pipeline/
  packages/
    core/           # TypeScript core library (@minions-pipeline/sdk on npm)
    python/         # Python SDK (minions-pipeline on PyPI)
    cli/            # CLI tool (@minions-pipeline/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [pipeline.minions.help](https://pipeline.minions.help)
- Blog: [pipeline.minions.blog](https://pipeline.minions.blog)
- App: [pipeline.minions.wtf](https://pipeline.minions.wtf)

---

## License

[MIT](LICENSE)
