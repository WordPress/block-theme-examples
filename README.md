<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at data/examples.json and data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
<!-- @TABLE EXAMPLES END -->

- [Download base theme link](https://raw.githubusercontent.com/wordpress-juanmaguitar/block-theme-examples/master/zips/base.zip)
- [Download child theme link](https://raw.githubusercontent.com/wordpress-juanmaguitar/block-theme-examples/master/zips/example-block-style-js.zip)
- [Live preview link](https://playground.wordpress.net/#{%22$schema%22:%22https://playground.wordpress.net/blueprint-schema.json%22,%22landingPage%22:%22/wp-admin/themes.php%22,%22steps%22:[{%22step%22:%22installTheme%22,%22themeZipFile%22:{%22resource%22:%22url%22,%22url%22:%22https://raw.githubusercontent.com/wordpress-juanmaguitar/block-theme-examples/master/zips/base.zip%22}},{%22step%22:%22installTheme%22,%22themeZipFile%22:{%22resource%22:%22url%22,%22url%22:%22https://raw.githubusercontent.com/wordpress-juanmaguitar/block-theme-examples/master/zips/example-block-style-js.zip%22},%22options%22:{%22activate%22:true}},{%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22}]})


```
{
  "$schema": "https://playground.wordpress.net/blueprint-schema.json",
  "landingPage": "/wp-admin/themes.php",
  "steps": [
    {
      "step": "installTheme",
      "themeZipFile": {
        "resource": "url",
        "url": "https://raw.githubusercontent.com/wordpress-juanmaguitar/block-theme-examples/master/zips/base.zip"
      }
    },
    {
      "step": "installTheme",
      "themeZipFile": {
        "resource": "url",
        "url": "https://raw.githubusercontent.com/wordpress-juanmaguitar/block-theme-examples/master/zips/example-block-style-js.zip"
      },
      "options": {
        "activate": true
      }
    },
    {
      "step": "login",
      "username": "admin",
      "password": "password"
    }
  ]
}
```