'use strict';

require('dotenv').config();
const Q = require('@nmq/q/server');

Q.start();

const db = new Q('database');
db.monitorEvent('create');