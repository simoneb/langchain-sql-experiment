import dotenv from 'dotenv'
dotenv.config()

import Debug from 'debug'

import { OpenAI } from 'langchain/llms/openai'
import { SqlDatabase } from 'langchain/sql_db'
import { createSqlAgent, SqlToolkit } from 'langchain/agents'
import { DataSource } from 'typeorm'
import readline from 'readline/promises'

const debug = Debug('intermediate-steps')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const dataSource = new DataSource({
  type: 'sqlite',
  database: 'Chinook.sqlite',
})
const db = await SqlDatabase.fromDataSourceParams({
  appDataSource: dataSource,
})
const toolkit = new SqlToolkit(db)
const model = new OpenAI({ temperature: 0 })
const executor = createSqlAgent(model, toolkit)

while (true) {
  const input = await rl.question('Fai una domanda: ')
  const result = await executor.call({ input })
  console.log(result.output)
  debug('%j', result.intermediateSteps)
}
