# ChargePi website

This is a ChargePi website and documentation hosting project. It is built using [Docusaurus 2](https://docusaurus.io/).

## Configuration

### Environment Variables

The website supports the following environment variables:

- `SUPPORT_EMAIL`: Set this to enable the protected email feature in the footer. If not set, the email section will not be displayed.
- `DOCUSAURUS_BASE_URL`: The base URL for the Docusaurus site (optional, defaults to `http://localhost:3000`).

Copy `env.example` to `.env` and configure the variables as needed:

```console
cp env.example .env
```

## Local Development

```console
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

## Build

```console
pnpm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.

### Using Docker

You can also build the site using Docker. Make sure you have Docker installed and run:

```console
    docker compose -f ./docker-compose.dev.yaml up --build
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

We welcome contributions to this project! Please read our [Contributing Guide](CONTRIBUTING.md) for details on how to
get started.
