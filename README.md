- [Download base theme link](https://raw.githubusercontent.com/wordpress-juanmaguitar/block-theme-examples/master/zips/base.zip)
- [Download child theme link](https://raw.githubusercontent.com/wordpress-juanmaguitar/block-theme-examples/master/zips/example-block-style-js.zip)
- [Live preview link](https://playground.wordpress.net/#%7B%22landingPage%22%3A%22%2Fwp-admin%2Fplugins.php%22%2C%22steps%22%3A%5B%7B%22step%22%3A%22login%22%2C%22username%22%3A%22admin%22%2C%22password%22%3A%22password%22%7D%2C%7B%22step%22%3A%22mkdir%22%2C%22path%22%3A%22%2Fdownloads%22%7D%2C%7B%22step%22%3A%22writeFile%22%2C%22path%22%3A%22%2Fdownloads%2Fbase-theme.zip%22%2C%22data%22%3A%7B%22resource%22%3A%22url%22%2C%22url%22%3A%22https%3A%2F%2Fraw.githubusercontent.com%2Fwordpress-juanmaguitar%2Fblock-theme-examples%2Fmaster%2Fzips%2Fbase.zip%22%2C%22caption%22%3A%22Downloading%20base%20theme...%22%7D%7D%2C%7B%22step%22%3A%22writeFile%22%2C%22path%22%3A%22%2Fdownloads%2Fchild-theme.zip%22%2C%22data%22%3A%7B%22resource%22%3A%22url%22%2C%22url%22%3A%22https%3A%2F%2Fraw.githubusercontent.com%2Fwordpress-juanmaguitar%2Fblock-theme-examples%2Fmaster%2Fzips%2Fexample-block-style-js%2Fblock-theme-examples.zip%22%2C%22caption%22%3A%22Downloading%20child%20theme...%22%7D%7D%2C%7B%22step%22%3A%22installTheme%22%2C%22themeZipFile%22%3A%7B%22resource%22%3A%22vfs%22%2C%22path%22%3A%22%2Fdownloads%2Fbase-theme.zip%22%7D%7D%2C%7B%22step%22%3A%22installTheme%22%2C%22themeZipFile%22%3A%7B%22resource%22%3A%22vfs%22%2C%22path%22%3A%22%2Fdownloads%2Fchild-theme.zip%22%7D%2C%22options%22%3A%7B%22activate%22%3Atrue%7D%7D%5D%7D)

```
{
  "landingPage": "/wp-admin/plugins.php",
  "steps": [
    {
      "step": "login",
      "username": "admin",
      "password": "password"
    },
    {
      "step": "mkdir",
      "path": "/downloads"
    },
    {
      "step": "writeFile",
      "path": "/downloads/base-theme.zip",
      "data": {
        "resource": "url",
        "url": "https://raw.githubusercontent.com/wordpress-juanmaguitar/block-theme-examples/master/zips/base.zip",
        "caption": "Downloading base theme..."
      }
    },
    {
      "step": "writeFile",
      "path": "/downloads/child-theme.zip",
      "data": {
        "resource": "url",
        "url": "https://raw.githubusercontent.com/wordpress-juanmaguitar/block-theme-examples/master/zips/example-block-style-js/block-theme-examples.zip",
        "caption": "Downloading child theme..."
      }
    },
    {
    "step": "installTheme",
        "themeZipFile": {
            "resource": "vfs",
            "path": "/downloads/base-theme.zip"
        }
    },
    {
    "step": "installTheme",
        "themeZipFile": {
            "resource": "vfs",
            "path": "/downloads/child-theme.zip"
        },
        "options": {
            "activate": true
        }
    }
  ]
}
```
