function ajax(opts){
    var httpRequest = new XMLHttpRequest()
    httpRequest.onreadystatechange = alertContents
    function alertContents() {
    if(httpRequest.readyState === XMLHttpRequest.DONE) {
        if(httpRequest.status === 200) {
        var response = JSON.parse(httpRequest.responseText)
        opts.success(response)
        } else {
        opts.error()
        }
    }
    }
    var query = ''
    for(var key in opts.data) {
    query += key + '=' + opts.data[key] + '&'
    }
    query = query.substr(0, query.length-1)
    if(opts.type === 'get') {
    httpRequest.open(opts.type, opts.url+'?'+query)
    httpRequest.send()
    }
    if(opts.type === 'post') {
    httpRequest.open(opts.type, opts.url)
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    httpRequest.send(query)
    }
}