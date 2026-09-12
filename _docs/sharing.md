---
layout: docs
title: Sharing
order: 4
---
Share and like buttons are already wired up on blog posts and pages, no extra markup needed.

If you want short URLs, auto-generated share images, and click analytics on top of that, add a publish token under `soopr` in `_config.yml`:

```yaml
soopr:
  publish_token: "your-token-here"
```

Without a token, the buttons still work, they just skip the extra features.
