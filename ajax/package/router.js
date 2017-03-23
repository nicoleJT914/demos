app.get('/login', function(req, res) {
    var userName = req.query.username
    var pwd = req.query.password
    res.send({
        userName: userName,
        password: pwd,
        status: 0
    })
})
app.post('/login', function(req, res) {
    var userName = req.body.username
    var pwd = req.body.password
    res.send({
        userName: userName,
        password: pwd,
        status: 0
    })
})