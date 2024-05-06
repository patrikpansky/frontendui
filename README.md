# 

Frontend library :)

Based on React, developed with vite stack.

- 
    - při publikaci npmjs je vhodné provést purge na [cdn](https://www.jsdelivr.com/tools/purge)

- 6.5.2024
    - npm audit fix
    - problém s autoreload / noreload dokument u Link
    - řešení: ProxyLink v shared
    - žádoucí vytvořit config pro centrální správu base uri (/src/config.js)
    - nutno upravit AppRouter a links, odkázat se na obsah configu a využití ProxyLink