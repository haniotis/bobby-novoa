# Bobby Novoa portfolio website

Bobby Novoa portfolio website, built on [Middleman](http://middlemanapp.com).

## Dependencies

- [Middleman](http://middlemanapp.com)
- [Sass](http://sass-lang.com/)
- [Livereload](https://github.com/middleman/middleman-livereload)
- [Autoprefixer](https://github.com/middleman/middleman-autoprefixer)

## Local preview

Once you've installed the dependencies above:

```
close repo
bundle install
bower install
middleman
```
  
## Build and deploy

To build and deploy the website to GitHub pages, run the following commands. This will output the necessary files in the `build` folder and deploy the website.

```
rake build    # Compile all files into the build directory
rake publish  # Build and publish to GitHub Pages
```