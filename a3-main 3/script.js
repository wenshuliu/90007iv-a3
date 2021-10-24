var coordinates=[];
var marker=new mapboxgl.Marker;

function removeCard(count){
    var remove = document.getElementsByClassName('remove')
    for(var i = 0;i<remove.length;i++){
        remove[i].index=i
        remove[i].onclick=function(){
            coordinates=coordinates.slice(0,this.index).concat(coordinates.slice(this.index+1)) 
            alert(remove[this.index])
            document.getElementsByClassName('card')[this.index].remove();
            if(count==1){
                passLngLat(1)
            }else{
                passLngLat(0)
                return
            }
        }
    }
}

function addCard(properties, type){
    var els = document.getElementsByClassName("add");
    for(var i = 0; i<els.length;i++){
        els[i].addEventListener('click',function(e){
            block_to_insert = document.createElement( 'div' );
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
            document.getElementById('sidebarMenuInner').appendChild(block_to_insert)
            var coor = []
            coor.push(properties.longitude)
            coor.push(properties.latitude)
            coordinates.push(coor)
            passLngLat(0)
        });
    }
}

function passLngLat(count){
    var card = document.getElementsByClassName('card')
    var remove = document.getElementsByClassName('remove')
    for(var i = 0;i<card.length;i++){
        card[i].index=i
        card[i].onclick=function(){
            map.flyTo({
                center:[coordinates[this.index][0],coordinates[this.index][1]],
                zoom: 17
            })
            marker.remove()
            marker = new mapboxgl.Marker()
                .setLngLat([coordinates[this.index][0],coordinates[this.index][1]])
                .addTo(map);
            if(count==1){
                removeCard(1)
            }else{
                removeCard(0)
                return
            }
        }
    }
}