requirejs.config({
    baseUrl: './js/src',
    paths: {
      jquery: '../lib/jquery-3.2.0.min'
    }
});

requirejs(['index'])
