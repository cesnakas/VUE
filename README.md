# Vue.js
This template should help get you started developing with Vue 3 in Vite.

## Creating a Vue Application
```sh
npm init vue@latest
```



## Project Setup
```sh
npm install
```

### Compile and Hot-Reload for Development
```sh
npm run dev
```

### Compile and Minify for Production
```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)
```sh
npm run lint
```

## Server Configurations

### Apache
```apacheconf
<IfModule mod_negotiation.c>
  Options -MultiViews
</IfModule>
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### nginx
```apacheconf
location / {
  try_files $uri $uri/ /index.html;
}
```
