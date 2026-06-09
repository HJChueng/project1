import { config } from 'dotenv';
config({ path: '.env.local' });

const { sql } = await import('@vercel/postgres');

await sql`
  CREATE TABLE IF NOT EXISTS consultations (
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(100)  NOT NULL,
    email      VARCHAR(255)  NOT NULL,
    phone      VARCHAR(50),
    message    TEXT          NOT NULL,
    created_at TIMESTAMPTZ   DEFAULT NOW()
  )
`;

console.log('✓ consultations table ready');
process.exit(0);
