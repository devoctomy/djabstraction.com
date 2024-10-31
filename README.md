# djabstraction.com

[![Build and Deploy Jekyll Site](https://github.com/devoctomy/djabstraction.com/actions/workflows/jekyll_build.yml/badge.svg)](https://github.com/devoctomy/djabstraction.com/actions/workflows/jekyll_build.yml)

This is the source code for djabstraction.com, built using the static site generator; Jekyll, and deployed to Amazon S3.

## Buidling & Testing Locally

This site has the following build dependences,

* ruby 3.2.2
* gem 3.4.10
* bundler 2.5.11

Before you can run locally you should runing following,

```
   bundle install
```

providing the bundle installed successfully, you should be able to then build and run the site using the following,

```
   bundle exec jekyll serve
```

to test posts dated in the future, run the following

```
   bundle exec jekyll serve --future
```

## Acknowledgements

This site was dervied from the Jekyll Theme, [Clean Blog](https://startbootstrap.com/theme/clean-blog-jekyll) by [StartBootstrap](https://github.com/StartBootstrap).
