function removeCard(){
    var els = document.getElementsByClassName("remove");
    for(var i = 0; i<els.length;i++){
        els[i].addEventListener('click',function(e){
            e.preventDefault();
            e.target.closest('div.card').remove();
        });
    }
}

function addCard(){
    var els = document.getElementsByClassName("add");
    for(var i = 0; i<els.length;i++){
        els[i].addEventListener('click',function(e){
            block_to_insert = document.createElement( 'div' );
            block_to_insert.innerHTML = 
            '<div class="card">'+
                '<div class="container">'+
                '<h4><b>John Doe</b></h4>'+
                '<p>Architect & Engineer</p>'+
                '<button class="remove" >Remove</button>'+
                '</div>'+
            '</div>'

            document.getElementById('sidebarMenuInner').appendChild(block_to_insert)

            removeCard()
        });
    }
}