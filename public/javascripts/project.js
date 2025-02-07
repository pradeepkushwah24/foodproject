function showPicture()
{
    const selectedFile=foodpicture.files[0]
    fp.width=60
    fp.src=URL.createObjectURL(selectedFile)
console.log()
}
$(document).ready(function(){
    $.get("/food/fillcategory",function(response){
       // alert(JSON.stringify(data))

       response.data.map((item)=>{
        $('#categoryid').append($('<option>').text(item.categoryname).val(item.categoryid))
       })
    })
 $(categoryid).change(function(){

    $.get('/food/fetchallsubcategory',{categoryid:$('#categoryid').val()},function(response){
        $('#subcategoryid').empty()
        $('#subcategoryid').append($('<option>').text('Select Sub-Category'))
        response.data.map((item)=>{
            $('#subcategoryid').append($('<option>').text(item.subcategoryname).val(item.subcategoryid))
        })
    })
    })
})