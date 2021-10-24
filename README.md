# 90007iv-a3

  **index.html** 文件中81行将button加入到popup window中
  ```<button class="add">Add to Travel Plan</button>```  
  **index.html** 文件中83行
```addCard(e.features[0].properties,"cafe");``` 自定义第二个参数作为判断依据用来在  
  **script.js** 文件中27-37行，进行自定义travel plan card格式编写
```
if(type == "cafe"){
                block_to_insert.innerHTML = 
                '<div class="card" onclick="passLngLat()">'+
                    '<div class="container">'+
                    '<h4><b>'+ properties["Trading name"] +'</b></h4>'+
                    '<p>Address: '+ properties["Street address"] +'</p>'+
                    '<button class="remove" >Remove</button>'+
                    '</div>'+
                    '<input type="hidden" name="lnt" value="'+properties.longitude+'">'+
                    '<input type="hidden" name="lat" value="'+properties.latitude+'">'+
                '</div>'
            }
```  
