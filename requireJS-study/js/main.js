require.config({
  // mandatory order of modules' dependicies 
  shim: {
    'purchase': ['credits', 'products'],
    'main': ['purchase']
  }
})

require(['purchase'], function(purchase) {
  'use strict';
  purchase.purchaseProduct()
});