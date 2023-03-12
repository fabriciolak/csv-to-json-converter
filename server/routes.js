import fs from 'node:fs/promises'

import { getCsvStream } from '../middlewares/get-csv-stream.js'
import { transformToJson } from '../utils/transform-to-json.js'

const path = new URL('csv-json.json', import.meta.url)

export const routes = [
  {
    method: 'POST',
    path: '/',
    handler: async (req, res) => {
      await getCsvStream(req, res)

      await fs.writeFile('./csv-json.json', transformToJson(req.body), 'utf-8')

      res.setHeader('Content-type', 'text/csv')
      res.end()
    }
  }
]