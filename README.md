# langchain-sql-experiment

An experiment at using langchain to query a SQL database via natural language.

## Setup

```
npm install
cp .env.sample .env
```

Then populate `.env` with your OpenAI API key.

## Usage

```
npm start
```

If you want to print the intermediate steps carried out by the agent to come to the response, enable debugging using the `DEBUG` environment variable:

```
DEBUG=intermediate-steps npm start
```

This will present a command line prompt where you can input a question.

## How it works

This uses a SQLite database stored along the codebase. You can use a VSCode extension to display the contents of the database and get ideas for queries you can do.

## Examples

> Note that you can ask questions in any language

- Q: Elenca le vendite totali per ogni nazione. I clienti di quale nazione hanno speso di più?
- A: I clienti degli Stati Uniti hanno speso di più, con un totale di 523.06.

---

- Q: Quali artisti hanno fatto più album?
- A: Ho trovato che Iron Maiden ha pubblicato 21 album, Led Zeppelin 14, Deep Purple 11, U2 10, Metallica 10, Ozzy Osbourne 6, Pearl Jam 5, Various Artists 4, Van Halen 4 e Lost 4.

---

- Q: Qual'è la playlist con più tracce?
- A: La playlist con più tracce è la playlist con ID 1 con 3290 tracce.
