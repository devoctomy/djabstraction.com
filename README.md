# djabstraction.com

[![Build Status](https://travis-ci.com/devoctomy/djabstraction.com.svg?branch=main)](https://travis-ci.com/devoctomy/djabstraction.com)

This is the source code for djabstraction.com, built using the static site generator; Jekyll, and deployed to Amazon S3.

## Buidling & Testing Locally

This site has the following build dependences,

* rvm 1.29.12 >
* ruby 3.0.0
* gem 3.2.15
* bundler 2.2.6

Before you can run locally you should runing following,

```
   bundle install
```

providing the bundle installed successfully, you should be able to then build and run the site using the following,

```
   bundle exec jekyll serve
```

## CI/CD

To achieve CD/CD, I use a combination of GitHub and [Travis-CI](https://travis-ci.com/). Once changes are pushed up to this repo, Travis-CI detects them, builds the entire site and then automatically publishes to Amazon S3.

More information on Amazon S3 deployment can be found [here](https://docs.travis-ci.com/user/deployment/s3/).

## Acknowledgements

This site was dervied from the Jekyll Theme, [Clean Blog](https://startbootstrap.com/theme/clean-blog-jekyll) by [StartBootstrap](https://github.com/StartBootstrap).
