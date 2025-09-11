const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.type('text/plain').send('Hello'));
app.get('/api/health', (req, res) => res.json({ ok: true }));
app.post('/api/echo', (req, res) => res.json(req.body || {}));

module.exports = app;
