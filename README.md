# 

Frontend library :)

Based on React, developed with vite stack.

- 6.5.2024
    - npm audit fix
    - problém s autoreload / noreload dokument u Link
    - řešení: ProxyLink v shared
    - žádoucí vytvořit config pro centrální správu base uri (/src/config.js)
    - nutno upravit AppRouter a links