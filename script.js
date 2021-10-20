function removeCard(){
    var els = document.getElementsByClassName("remove");
    for(var i = 0; i<els.length;i++){
        els[i].addEventListener('click',function(e){
            e.preventDefault();
            e.target.closest('div.card').remove();
        });
    }
}

function addCard(properties, type){
    var els = document.getElementsByClassName("add");
    for(var i = 0; i<els.length;i++){
        els[i].addEventListener('click',function(e){
            block_to_insert = document.createElement( 'div' );
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
            document.getElementById('sidebarMenuInner').appendChild(block_to_insert)

            removeCard()
        });
    }
}