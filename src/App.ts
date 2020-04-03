// import cors from 'cors'
import express from 'express'

// import { coorsConfig } from './app/config/corsConfig'
import routes from './routes'

class App {
  public express: express.Application;
  public constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
