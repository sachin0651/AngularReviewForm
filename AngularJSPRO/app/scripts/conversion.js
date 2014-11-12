
//'use strict';  
//$( function(){
//// Bmi calculation part
//    $('#user_weight,#height_feet,#height_inches').keyup(function() {
//      $('#bmi_txt').text("bmi");
//      calculateBmi();
//    });
//
//    var calculateBmi = function() {
//      var weight = parseInt($('#user_weight').val());
//      var heightFeet = parseInt($('#height_feet').val());
//      var heightInches = parseInt($('#height_inches').val());
//      var height = (heightFeet * 12) + heightInches;
//      if (weight.length !== 0) {
//        var finalBmi = weight * 703 / (height * height);
//        var bmi = finalBmi.toFixed(4);
//        if (isNaN(bmi)) {
//          bmi = '0';
//        }
//        $('#bmi_txt').html('<a href="example.html">Link</a><b>hello</b>');
//        console.log(bmi);
//        //$('#bmi_txt').text(bmi);
//      }
//    };
//    
//});