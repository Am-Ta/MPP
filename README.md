# Mini Personal Project(MPP)
* [Demo](https://codepen.io/amin-ta/pen/XvjNrW)
* Yarn - Fast, reliable and sequre dependency management.
    * Yarn is a JavaScript Package Manager, a direct competitor of npm, one of the Facebook Open Source projects.
    * [Installation](https://yarnpkg.com/en/docs/install)
    * [An introduction to Yarn](https://flaviocopes.com/yarn/)
* Gulp - Automate and enhance your workflow
    * gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.
    * The references for learning
      * [Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)
      * [Gulp 4: The new task execution system](https://fettblog.eu/gulp-4-parallel-and-series/)
      * [Using Gulp 4 in your workflow](https://coder-coder.com/gulp-4-walk-through/)
    * The list of modules that  my used:
        * [gulp](https://yarnpkg.com/en/package/gulp)
            * ```bash 
              yarn add --dev gulp
              ```
        * [gulp-babel](https://yarnpkg.com/en/package/gulp-babel)
            * ```bash 
              # Babel 7
              yarn add --dev gulp-babel @babel/core @babel/preset-env
              # Babel 6
              yarn add --dev gulp-babel@7 babel-core babel-preset-env
              ```
        * [gulp-if](https://yarnpkg.com/en/package/gulp-if)
            * ```bash 
              yarn add --dev gulp-if
              ```
        * [gulp-imagemin](https://yarnpkg.com/en/package/gulp-imagemin)
            * ```bash 
              yarn add --dev gulp-imagemin
              ```
        * [gulp-postcss](https://yarnpkg.com/en/package/gulp-postcss)
            * ```bash 
              yarn add --dev gulp-postcss
              ```
        * [gulp-sass](https://yarnpkg.com/en/package/gulp-sass)
            * ```bash 
              yarn add --dev gulp-sass
              ```
        * [gulp-uglify](https://yarnpkg.com/en/package/gulp-uglify)
            * ```bash 
              yarn add --dev gulp-uglify
              ```
        * [gulp-useref](https://yarnpkg.com/en/package/gulp-useref)
            * ```bash 
              yarn add --dev gulp-useref
              ```
        * [del](https://yarnpkg.com/en/package/del)
            * ```bash 
              yarn add --dev del
              ```
        * [cssnano](https://yarnpkg.com/en/package/cssnano)
            * ```bash 
              yarn add --dev cssnano
              ```
        * [autoprefixer](https://yarnpkg.com/en/package/autoprefixer)
            * ```bash 
              yarn add --dev autoprefixer
              ```
    * [The full list of plugins](https://gulpjs.com/plugins/)
* I used the [Bootstrap(4.3.1)](https://getbootstrap.com/) as the world’s most popular front-end component library.
    * ```bash 
      yarn add bootstrap
      ```
* I used the Quicksand font for document webpage.
    * [Quicksand](https://fonts.google.com/specimen/Quicksand)
* I used the [Sass](https://sass-lang.com/) as the style sheet language.
    * Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
___
## Install and Build
you have a package.json file with the list of dependencies but the packages have not been installed yet, run
```bash
yarn
# or 
yarn install
```
then for build
```bash
gulp build
```
