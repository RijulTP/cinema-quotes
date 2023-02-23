![](src/public/images/banner.png)</br>
<p align="center">
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-0aa8d2?logo=opensourceinitiative&logoColor=fff" alt="License MIT">
  </a>
  <a href="https://hub.docker.com/r/shadowoff09/cinema-quotes">
    <img src="https://img.shields.io/docker/pulls/shadowoff09/cinema-quotes?logo=docker&color=0aa8d2&logoColor=fff" alt="Docker Pulls">
  </a>
  <a href="http://as93.link/dashy-build-status">
   <img src="https://badgen.net/github/status/shadowoff09/cinema-quotes?icon=github" alt="GitHub Status">
  </a>
</p>

# Getting Started 🚀
## Deploying from Docker Hub 🐳

You will need Docker installed on your machine.

```bash
  docker run -d -p 3001:3001 shadowoff09/cinema-quotes:latest
```

Or

```bash
  docker run -d \
  -p 3001:3001 \
  --name cinema-quotes \
  --restart=always \
  shadowoff09/cinema-quotes:latest
```


[![Cinema-Quotes on Docker Hub](https://dockerico.blankenship.io/image/shadowoff09/cinema-quotes)](https://hub.docker.com/r/shadowoff09/cinema-quotes)

## Deploying from GitHub (GHCR) 🐙

```bash
  docker run -p 3001:3001 ghcr.io/shadowoff09/cinema-quotes:latest
```

Or

```bash
  docker run -d \
  -p 3001:3001 \
  --name cinema-quotes \
  --restart=always \
  ghcr.io/shadowoff09/cinema-quotes:latest
```

## Deploying from Source 🔨

You will need [git](https://git-scm.com/downloads), the latest or LTS version of [Node.js](https://nodejs.org/) installed on your system.

- Clone the Repo: `git clone https://github.com/shadowoff09/cinema-quotes.git` and `cd cinema-quotes`
- Install dependencies: `npm i`
- Run: `npm run start`

---

<p align="center">
  <br><br>
  <a href="https://github.com/Lissy93/dashy">
    <img src="https://github.githubassets.com/images/icons/emoji/octocat.png" />
  </a>
  <br><br>
  <i>Made with ❤️ and Javascript</i>
</p>
