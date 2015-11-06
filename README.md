This is an example project displaying the simplicity and scalability of Sass. I used SCSS syntax rather than Sass. I added Bourbon and Neat and created a sample grid that is responsive and very lightweight.

Do not edit the .css file directly. Sass compiles all .scss files into one main.css file using Grunt.js. If you edit main.css, your changes will be overidden when someone else changes any .scss file.

The main.scss file should not include any CSS other than @imports. When creating a new .scss file, edit the main.scss file to include the @import to the new file's path.

When using variables or mixins, use @include to whatever files the new file depends on.

Never edit vendor files. Instead, make your changes in the vendors/vendoredits.scss file and that will cascade over the vendor defaults. And you should only do this if you really know what you are doing.
