/*
 * Copyright (c) 2012-2019 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */

/*eslint-env node*/

var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/public/dashboard/index.html'));
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/public/dashboard/index.html'));
});

app.get('/missions', function (req, res) {
  res.sendFile(path.join(__dirname+'/public/missions/index.html'));
});

app.get('/card', function (req, res) {
  res.sendFile(path.join(__dirname+'/public/card/index.html'));
});

app.get('/parent', function (req, res) {
  res.sendFile(path.join(__dirname+'/public/parent/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
