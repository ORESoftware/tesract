'use strict';

/*
host: interview.coffeuxoghik.us-east-1.rds.amazonaws.com
database: interview
username: test
*/

import *  as assert from 'assert';
import * as pg from 'pg';

const c = new pg.Client({
  host: 'interview.coffeuxoghik.us-east-1.rds.amazonaws.com',
  port: 5432,
  database: 'interview',
  user: 'test',
  password: 'ethical-interviewer'
});

const conn = c.connect();


/*

reate table accounts (
  "id" serial primary key,
  "user_id" text not null,
  "type" text not null check (type in ('checking', 'savings', 'credit'))
);

create table transactions (
  "id" serial primary key,
  "series" text not null,
  "account_id" integer not null references accounts (id),
  "type" text not null check (type in ('credit', 'debit')),
  "description" text not null,
  "amount" money not null,
  "date" date not null
);

create table forecasts (
  "id" serial primary key,
  "transaction_id" integer not null references transactions (id),
  "forecasted_at" timestamp without time zone not null,
  "model_version" integer not null,
  "amount" money not null,
  "date" date not null,
  unique (transaction_id, model_version)
);

*/

export const findForecasts = async (end: Date, user: string) => {
  
  await conn;
  console.log('connected');
  
  const now = new Date();
  
  return c.query(`
      
      select *
      from forecasts f, accounts a, transactions t
      where a.id = t.account_id and t.id = f.transaction_id and f.date >= $1 and f.date <= $2  and a.user_id = $3
      limit 50

    `, [now, end, user]
    )
    .then(v => {
      return v.rows;
    })
  
};

export const testFindForecasts = async (start: Date, end: Date, user: string) => {
  
  const rows = await findForecasts(end, user);
  
  for (const r of rows) {
    
    console.log('r:', r);
    assert(r.date >= start, 'date is too young');
    assert(r.date <= end, 'date is too old');
    
  }
  
};

testFindForecasts(
  new Date(new Date().setDate(4)),
  new Date(new Date().setDate(3)),
  '\\x000000000000000000000007'
)
  .catch(err => {
    console.error({err});
  });
