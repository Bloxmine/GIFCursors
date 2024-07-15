## Random GIF Cursor  

This script replaces your default cursor with a randomly chosen GIF image. It offers more flexibility in cursor design compared to traditional `.cur` files.

**Features:**

* Uses GIFs for a wide variety of cursor designs.
* Randomly selects a GIF from a provided folder on every page load.
* Follows your mouse movement smoothly.

**Author:** Hein Dijstelbloem
**Version:** 1.0
**Date created:** 2024-07-10
**Last updated:** 2024-07-15
**License:** GNU GPL v2

### How it Works

1. The script loads on DOMContentLoaded.
2. It defines an array containing filenames for all available cursors (GIFs).
3. It randomly chooses a GIF from the array.
4. It selects the `<img>` element with the ID `cursor-gif`. 
5. It sets the `src` attribute of the image to the randomly chosen GIF path.
6. It sets the image's display style to `block` to make it visible.
7. It adds a `mousemove` event listener to the document.
8. Whenever the mouse moves, the event listener updates the image's position (left and top) to follow the cursor.

**Requirements**

* An HTML file with an `<img>` element with the ID `cursor-gif`. 
* A folder named `images/cursors` containing your desired cursor GIFs.

**Installation**

1. Clone this repository or download the script file.
2. Include the script file in your HTML document after the opening `<body>` tag.
3. Make sure you have the `images/cursors` folder with your GIF files in the same directory as your HTML file (or adjust the image path accordingly).

**Example Usage**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Random GIF Cursor</title>
  <link rel="stylesheet" href="style.css"> </head>
<body>
  <img id="cursor-gif" src="" style="position: fixed; z-index: 1000; pointer-events: none; display: none;">
  <script src="cursor.js"></script> </body>
</html>
```

**License**

This script is licensed under the GNU General Public License v2 (GPLv2). See the LICENSE file for more information.
