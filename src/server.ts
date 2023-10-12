import { makeServer } from './adapters/web/server/server'
import { MongoHelper } from './adapters/database/mongo-helper'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, '../.env') })

MongoHelper.connect(process.env.MONGO_URL)
  .then(async () => {
    console.log('db connected')
    const server = makeServer()
    void server.run()
  })
  .catch(console.error)
