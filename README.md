# BO3 Super EE Helper

First-pass local web helper for the Black Ops 3 Super Easter Egg journey, starting with **Gorod Krovi**.

## Included in this MVP

- Interactive Gorod Krovi checklist with prerequisite-aware steps
- Active step detail panel with subtasks, checkpoints, and optional hints
- Bomb step order tracker
- Valve step scratch workspace
- Trophy tracker
- Run notes
- Local persistence with `localStorage`
- Solo / co-op mode toggle

## Run it

Because this version has no build step, you can use either option below:

1. Open [index.html](C:/Users/tmorg/Projects/BO3%20Super%20EE%20Helper/index.html) directly in a browser.
2. Or serve the folder locally:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open [http://127.0.0.1:4173](http://127.0.0.1:4173).

## Files

- [index.html](C:/Users/tmorg/Projects/BO3%20Super%20EE%20Helper/index.html)
- [styles.css](C:/Users/tmorg/Projects/BO3%20Super%20EE%20Helper/styles.css)
- [app.js](C:/Users/tmorg/Projects/BO3%20Super%20EE%20Helper/app.js)
