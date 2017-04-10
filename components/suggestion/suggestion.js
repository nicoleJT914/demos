/*var fakedata = [
  'abcccdsss',
  'abccddsss',
  'abccedsss',
  'abcekks',
  'bccedsss',
  'bcekkksss',
  'dkkkkss',
  'eklse',
  'fklse',
  'gggseo'
]*/

function $$(selector) {
  return document.querySelector(selector)
}

var input = $$('.suggestion-content input')
var ul = $$('.suggestion-list')
var index = -1
var timerId
var backValue = ''

// 自动建议
input.addEventListener('input', function() {
  let keyword = this.value.trim() 
  if (timerId) {
    clearTimeout(timerId)
  }
  timerId = setTimeout(function() {
    if(!keyword) {
      hideList()
      return
    }
    index = -1
    searchSuggestionList(keyword, renderList) 
  }, 100)
})

// 鼠标选择
/*ul.addEventListener('click', function(e) {
  input.value = e.target.innerText
  hideList()
})*/

input.addEventListener('keydown', function(e) {
  let lis = Array.prototype.slice.call(ul.children)
  if (!input.value.trim()) {
    return
  }
  switch(e.keyCode) {
    case 13:
      hideList()
      break
    case 27:
      hideList()
      break
    case 9:
      {
        e.preventDefault()
        if(index === -1) {
          index = 0
          let keyword = lis[index].innerText
          input.value = keyword
          renderList([keyword])
        }else {
          hideList()
          index = -1
        }
      }
      break
    case 40:
      {
        e.preventDefault()
        selectList(lis,40)
      }
      break
    case 38:
      { 
        e.preventDefault()
        selectList(lis,38)
      }
      break
  }
})

input.addEventListener('blur', function() {
  if(index !== -1) {
    input.value = backValue
    backValue = ''
  }
  hideList()
})

function selectList(lis, num) {
  if (index === -1) {
    backValue = input.value
  }
  if (num === 40) {
    if (index === -1 || index === lis.length-1) {
      index = 0
    }else {
      index++
    }  
  }
  if (num === 38) {
    if (index === -1 || index === 0) {
      index = lis.length-1
    }else {
      index-- 
    }
  }
  removeSiblingsClass(lis[index], lis)
  lis[index].classList.add('hover')
  input.value = lis[index].innerText
}

function renderList(list) {
  if(list.length === 0) {
    hideList()
    return
  }
  var stringHTml = generateHtml(list)
  ul.innerHTML = stringHTml
  showList()
}

/*function searchSuggestionList(keyword, fn) {
  setTimeout(function() {
    var results =  fakedata.filter(function(item) {
      return item.indexOf(keyword)>=0
    })
    fn(results)
  }, 400)
}*/

function searchSuggestionList(keyword, fn) {
  setTimeout(function() {
    $.ajax({
      url: "https://api.github.com/search/repositories",
      dataType: 'jsonp',
      data: { q: keyword },
      jsonp: 'callback',
      success: function (ret) {
        fn(ret.data.items)
      }
    })
  }, 0)
}

function generateHtml(list) {
  return list.map(function(item) {
    return `
    <li><a target="_blank" href="${item.html_url}">${item.full_name}</a></li>
    `
  }).join('')
}

function removeSiblingsClass(node, children) {
  children.forEach(function(item) {
    if([node].indexOf(item) === -1 && item.classList.contains('hover')) {
      item.classList.remove('hover')
    } 
  })
}

function showList() {
  ul.classList.add('show')
}

function hideList() {
  ul.innerHTML = ''
  ul.classList.remove('show')
}