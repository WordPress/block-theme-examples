- [Download base theme link](https://raw.githubusercontent.com/wordpress-juanmaguitar/block-theme-examples/master/zips/base.zip)
- [Download child theme link](https://raw.githubusercontent.com/wordpress-juanmaguitar/block-theme-examples/master/zips/example-block-style-js.zip)
- [Live preview link](https://playground.wordpress.net/#%7B%22landingPage%22%3A%22%2Fwp-admin%2Fthemes.php%22%2C%22steps%22%3A%5B%7B%22step%22%3A%22login%22%2C%22username%22%3A%22admin%22%2C%22password%22%3A%22password%22%7D%2C%7B%22step%22%3A%22installTheme%22%2C%22themeZipFile%22%3A%7B%22resource%22%3A%22url%22%2C%22url%22%3A%22https%3A%2F%2Fraw.githubusercontent.com%2Fwordpress-juanmaguitar%2Fblock-theme-examples%2Fmaster%2Fzips%2Fbase.zip%22%7D%7D%2C%7B%22step%22%3A%22installTheme%22%2C%22themeZipFile%22%3A%7B%22resource%22%3A%22url%22%2C%22url%22%3A%22https%3A%2F%2Fraw.githubusercontent.com%2Fwordpress-juanmaguitar%2Fblock-theme-examples%2Fmaster%2Fzips%2Fexample-block-style-js%2Fblock-theme-examples.zip%22%7D%2C%22options%22%3A%7B%22activate%22%3Atrue%7D%7D%5D%7D)


```
{
  "landingPage": "/wp-admin/themes.php",
  "steps": [
    {
      "step": "login",
      "username": "admin",
      "password": "password"
    },
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
        "url": "https://raw.githubusercontent.com/wordpress-juanmaguitar/block-theme-examples/master/zips/example-block-style-js/block-theme-examples.zip"
      },
      "options": {
        "activate": true
      }
    }
  ]
}
```
