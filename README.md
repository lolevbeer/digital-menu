Simple kiosk display for menu

Sample Entry Layout, adjust in _data/menu.yml to update.

```
drafts:
  hoppy:
    - beer: 'ONSITE #1'
      type: IPA
      description: 12oz
      abv: 5.4%
    - beer: 'ONSITE #2'
      type: Blonde
      description: 12oz
      abv: 4.2%
  traditional:
    - beer: 'ONSITE #3'
      type: Bavarian Lager
      description: 12oz
      abv: 4.5%
    - beer: 'ONSITE #4'
      type: Helles Lager
      description: 12oz
      abv: 4.2%

to go:
  '':
    - beer: 'ONSITE #1'
      price: $13
    - beer: 'ONSITE #2'
      price: $15
    - beer: 'ONSITE #3'
      price: $20
```

Runs on Jekyll, use `sudo bundle exec jekyll serve --livereload -P 4001 --livereload-port 35730` to view locally.
