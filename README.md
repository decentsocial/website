> Decent is an ad-free, privacy-first Twitter reading experience

Visit [decent.social](https://decent.social/)

# installation

```
npm i 
```

# building

this builds both css and the final `_site` folder that can be served via HTTP

```
npm run build
```


if you updated any `scss` file, run this to build just the css

```
npm run build:css
```

all files (*.md with templates, images, css, etc) need to be compiled and moved to `_site`

this runs `devblog build`

```
npm run build:site
```

# development

serve `_site` on `http://localhost:8080`

```
npm start

# or 

npx http-server _site
```