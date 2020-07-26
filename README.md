# Image Map Resizer

Written in vanilla JS, this utility allows the recalculating of the area coordinates of the image map to match the actual size on load and window.resize.

This repo is inspired from a jQuery Plugin <a href="https://github.com/stowball/jQuery-rwdImageMaps">jQuery-rwdImageMaps</a> which was developed by <a href="https://github.com/stowball/jQuery-rwdImageMaps/commits?author=stowball">stowball</a>

# Usage

To use the plugin simply add it the script on your page. Let the magic work !!

```html
<script type='text/javascript' src='image.map.resizer.min.js'></script>
```

You have to manually trigger the resize event once at the initial stage.

```js
window.dispatchEvent(new Event('resize'))
```

# Preview 

Click <a href="https://vikasdwivedi.github.io/image-map-resizer/"> here</a> to preview.
