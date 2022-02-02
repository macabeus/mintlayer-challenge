# mintlayer-challenge

> 📈 Simple displayer for data associated with a ticker

<p align="center">
  <img src="https://user-images.githubusercontent.com/9501115/152238267-ba81c739-ad4b-47eb-a4df-00d74ccf244a.png">
</p>

This application fetches the tickers list and history by [Bitfinex API](https://docs.bitfinex.com/reference).

## Some implementation highlights

- Since Bitfinex API doesn't allow requests by `localhost` (otherwise, we'll have a CORS error), we are using [`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/) to proxy the request.
- We are using the package [`swr`](https://swr.vercel.app/) provides cache from the API, wrapped by the custom hook [`useResource`](src/hooks/useResource.ts).
- Since this application is simple enough, the global state management is provided by [React Context](https://reactjs.org/docs/context.html)

## Contribution

1 - Clone this repository

```
> git clone git@github.com:macabeus/mintlayer-challenge.git
> cd mintlayer-challenge
```

2 - Install its dependencies

```
> npm i
```

3 - Start the developer mode

```
> npm run start
```

4 - Build for production

```
> npm run build
```

### Lint

```
> npm run lint
```
