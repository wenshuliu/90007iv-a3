# 90007iv-a3

  **index.html** 文件中105行将button加入到popup window中
  ```<button class="add">Add Test</button>```  
  **index.html** 文件中107行
```addCard(e.features[0].properties,"cafe");``` 自定义第二个参数作为判断依据用来在  
  **script.js** 文件中16 行，进行自定义travel plan card格式编写
```
if(type == "cafe"){
                block_to_insert.innerHTML = 
                '<div class="card">'+
                    '<div class="container">'+
                    '<h4><b>'+ properties.trading_name +'</b></h4>'+
                    '<p>Address: '+ properties.street_address +'</p>'+
                    '<button class="remove" >Remove</button>'+
                    '</div>'+
                '</div>'
            }
```  
**注：可以考虑在card里存一个coordinate,但不显示，为后续做新的功能做准备**
