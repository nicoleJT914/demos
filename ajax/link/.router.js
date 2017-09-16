function setRouter(app){ 
 var router = app; 

app.post('/test', function(req, res) {
    var userName = req.body.userName
    res.send({
        userName: userName,
        computedString: 'hi, '+userName
    })
})}
 module.exports.setRouter = setRouter