# react-loader [![build status](https://travis-ci.org/trendmicro-frontend/react-loader.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-loader) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-loader/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-loader?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-loader.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-loader/)

React Loader

Demo: https://trendmicro-frontend.github.io/react-loader

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-loader](https://github.com/trendmicro-frontend/react-loader):

  ```
  npm install --save react @trendmicro/react-loader
  ```

2. At this point you can import `@trendmicro/react-loader` and its styles in your application as follows:

  ```js
  import Loader from '@trendmicro/react-loader';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-loader/dist/react-loader.css';
  ```

## Usage

```js
<Loader
    className="component"
>
    GitHub
</Loader>
```

### Loader Sizes

```js
<Loader size="lg" />
<Loader size="large" />
<Loader size="md" />
<Loader size="medium" />
<Loader size="sm" />
<Loader size="small" />
```

### Loader with button

```js
<Button disabled>
    <Loader size="small" />
    Uploading
</Button>
<Button btnStyle="primary" disabled>
    <Loader size="small" />
    Uploading
</Button>
```

### Loader overlay

```js
<Loader size="lg" overlay={true} />
```

## License

MIT
