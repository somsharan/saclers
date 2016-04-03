'use strict';
const apiUrl = 'http://localhost/api/'
function getTokenId(){
    var userEmail = $('#userEmail').val()
    console.log(apiUrl,'apiurl')
    $.ajax({
        'url': apiUrl+'createTokenId',
        'type':'POST',
        'data':{empEmail: userEmail},
        'success': function(tokenData){
            console.log('data to be saved')
            $('#authId').html('Token Id:"'+tokenData.data.tokenId+'"<br/> is created for following email:'+tokenData.data.email);
        },
        'error': function(err){
            
        }
    })
}