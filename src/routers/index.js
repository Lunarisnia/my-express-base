'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const { detail } = require('../config/components/server.config');
const routerDefault = express.Router();

const baseName = path.basename(__filename);

function applyRouter(app) {
  routerDefault.get('/v1/', (_, res) =>
    res.send({ data: 'OK', version: detail.apiVersion }),
  );

  fs.readdirSync(__dirname)
    .filter((file) => file.indexOf('.') !== 0 && file !== baseName)
    .forEach((file) => {
      if (/^v[0-9]+/.test(file)) return;
      const router = express.Router();
      const apply = require(path.join(__dirname, file));
      const prefix = file.split('.')[0];
      apply(router);
      app.use(`/v1/${prefix}`, router);
    });

  app.use(`/`, routerDefault);
}

module.exports = applyRouter;
