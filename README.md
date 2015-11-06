// This file should explain Sass and this project's contents...

Do not edit the .css file directly. Sass compiles all .scss files into one main.css file. If you edit main.css, your changes will be overidden when someone else changes any .scss file.

The main.scss file should not include any CSS other than @imports. When creating a new .scss file, edit the main.scss file to include the @import to the new file's path.

Never edit vendor files. Instead, make your changes in the vendors/vendoredits.scss file and that will cascade over the vendor defaults. And you should only do this if you really know what you are doing.
