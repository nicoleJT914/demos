app.post('/getNews', function(req, res) {
    var news = [
        "你的良心不会痛吗",
        "心情不好看看这几张图",
        "乐天集团会长称热爱中国",
        "具惠善 下车",
        "口红到底应该怎么涂",
        "清明小长假",
        "睡不好容易晒黑",
        "孙俪儿子",
        "语文老师的棺材板按不住了",
        "西红柿里吃出草莓"
    ]
    var data = []
    for(var i=0;i<3;i++) {
        var index = parseInt(Math.random()*news.length)
        data.push(news[index])
        news.splice(index,1)
    }
    res.header("Access-Control-Allow-Origin","http://localhost:8080")
    res.send(data)
})