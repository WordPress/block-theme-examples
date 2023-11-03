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


```
{
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
        "url": "https://raw.githubusercontent.com/wordpress-juanmaguitar/block-theme-examples/master/zips/example-block-style-js/block-theme-examples.zip"
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
