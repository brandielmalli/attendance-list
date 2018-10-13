
//**
//attendance sheet //
//
// st name //
// student name store //
//*click button to see names//
var studentList = [];
//enter student name
$('#add').on("click",function(e){
  console.log('running')
//prev def brow
e.preventDefault()
//get vavlue
var studentName = $("#input").val()
$("#input").val('')
  //store vavlues
studentList.push(studentName);

});

//clear input user can enter another value
$('#clear').on('click', function(){
  $('li').remove();
  });
//add jquery..compress version// add script tag
//teacher can click a button to see names  2 arguments
$("#student").on("click",function(){
  //take names from list an append them to dom//
  studentList.forEach(function(el){
      $("ul").append("<li>"+el+"</li>")
  });
});
