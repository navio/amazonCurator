console.log("Starting");
var port = process.env.PORT || 3000

var amazon  = require('amazon-product-api'),
    app     = require('koa')(),
    router  = require('koa-router');

var api     = require("./router")(app);

    app.use(router(app));

    app.get('/', api.message );

    app.listen(port);
