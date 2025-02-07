$(document).ready(function(){
  
    $.get("/movie/get_all_movie",function(response){
      
     
htm=' '
       response.data.map((item)=>{
       htm+='<div style="margin:05px;">'
       htm+=`<img src='/images/${item.movieposter} ' width="300" height="300">`
       htm+='</div>'

       })
         
         $('#result').html(htm)
    })
  $('#txt').keyup(function(){
    $.get("/movie/get_all_movies",{pattern:$('#txt').val()} ,  function(response){
      
     
      htm=' '
             response.data.map((item)=>{
             htm+='<div style="margin:05px;">'
             htm+=`<img src='/images/${item.movieposter} ' width="300" height="300">`
             htm+='</div>'
      
             })
               
               $('#result').html(htm)
          })
  })
})