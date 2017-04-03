/*
* url: '/load'
* reqPara: {start:1, len:5}
* resPara: {status:1, data:[1,2,3,4,5]}
*/
app.get('/load', function(req, res) {
    //req.query可以获取请求参数
    var curIdx = req.query.curIdx
    var len = req.query.length
    var data = []
    for(var i=0;i<len;i++) {
        data.push((parseInt(curIdx)+i))
    }
    setTimeout(function(){
        res.send({
            status: 1,
            data: data
        })
    },1000) 
})