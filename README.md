# hayho-ting

## Introduction

`hayho-ting` is a Node.js package that can be used to compress images. It is built on top of `tinify.js`, a library that provides a simple way to compress images using the TinyPNG API.

## Documentation

The official documentation for `hayho-ting` can be found at [https://tinypng.com/developers/reference/nodejs#compressing-images](https://tinypng.com/developers/reference/nodejs#compressing-images). This documentation provides detailed information on how to use the package, including the available parameters and options.

## Installation

To install `hayho-ting`, simply run the following command:

```
npm install -g hayho-ting
```

## Usage

To use `hayho-ting`, you need to provide the file directory as a required parameter. You can also provide an API key as an optional parameter. If you don't provide an API key, the package will use a default key that has a monthly limit of 500 images.

Here is an example of how to use `hayho-ting`:

```
ting /Users/yuhaihe/Desktop/hayho/tiny-png/image NQZz7VPvrjfGBPpPSnH6DMXQ690z30jQ
```

In this example, `/Users/yuhaihe/Desktop/hayho/tiny-png/image` is the file directory, and `NQZz7VPvrjfGBPpPSnH6DMXQ690z30jQ` is the API key. If you don't want to provide an API key, you can simply omit it from the command:

```
ting /Users/yuhaihe/Desktop/hayho/tiny-png/image
```

## Conclusion

`hayho-ting` is a simple and easy-to-use package that can help you compress images quickly and efficiently. Whether you're working on a small project or a large-scale application, `hayho-ting` can help you optimize your images and improve your website's performance.