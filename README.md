This is an example project displaying the simplicity and scalability of Sass. I used SCSS syntax rather than Sass. I added Bourbon and Neat and created a sample grid that is responsive and very lightweight.

Do not edit the .css file directly. Sass compiles all .scss files into one main.css file using Grunt.js. If you edit main.css, your changes will be overidden when someone else changes any .scss file.

The main.scss file should not include any CSS other than @imports. When creating a new .scss file, edit the main.scss file to include the @import to the new file's path.

When using variables or mixins, use @include to whatever files the new file depends on.

Never edit vendor files. Instead, make your changes in the vendors/vendoredits.scss file and that will cascade over the vendor defaults. And you should only do this if you really know what you are doing.

You will see that the HTML is completely free of any grid-dependent classes or IDs. I used CSS for the grid layout and presentation layer as it should be. In a scalable app, you would never have to edit HTML to manipulate your grid or update HTML if the vendor made changes or deprecated features.
