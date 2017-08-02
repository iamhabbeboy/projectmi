import React, { Component } from 'react';
import Realm from 'realm';

let db = new Realm({
 schema : [{
  name: 'Person',
  primaryKey: 'name',
    properties: {
      name: 'string',
      age: { type: 'int', default: 0 },
    }
  }]
});

let Model = {
  save: (list) => {
    db.write(() => {
      db.create('Person', list);
    });
  },
  find: (list) => {
    let result = db.objects('Person').filtered('age > 10')
    return result;
  }
};

//Model.save({name: 'Abiodun S.', age: 20});
//Model.save({name: 'Solomon Az', age: 10});

module.exports = Model;
