var temp = "";
function paint(temp) {
    const z = document.querySelectorAll(temp);
    $(document).ready(function() {
        for(let i = 0; i < z.length; i++) {
            $(z[i]).css("color","Maroon");
        }
    });
}
function depaint(temp) {
    const z = document.querySelectorAll(temp);
    $(document).ready(function() {
        for(let i = 0; i < z.length; i++) {
            $(z[i]).css("color","white");
        }
    });
}
var time = 2000;
var arr = [1,2,3,4,5];
function start(){
    var num = document.getElementById("inputed").value;
    document.getElementById("btn1").disabled = true;
    setTimeout(()=>{
        paint("#line1");                                                    
        $("#tempvar").css("display","block");
    },time);
    time += 2000;
    setTimeout(()=>{
        depaint("#line1");
        paint("#line2");
        setTimeout(()=>{
            paint("#value1");                                                   // 1 -> red
        }, time);
        time += 2000;
        if(num == arr[0]) {                                                     // Check arr[0]
            setTimeout(()=>{
                depaint("#line2");
                paint("#line3");
                depaint("#value1");
                $("#tempvar").animate({marginLeft: "+=205px"},3000);
                paint("#address2");
                paint(".ptr2");
                paint("#value2");                                              // 2 -> red
                setTimeout(()=>{
                    $("#address2").css("color","white");
                    $(".ptr2").css("color","white");
                },time);
                time+=3000;
                $("#node1").fadeOut(3000);
                $("#tempvar").animate({marginLeft: "-=195px"},0);
            },time);
            time += 3000;
        } else {
            setTimeout(()=>{
                depaint("#line2");
                paint("#line5");
                depaint("#value1");
                $("#tempvar").animate({marginLeft: "+=205px"},2000);
                setTimeout(()=>{
                    $("#prevvar").css("display","block");
                    $("#tempvar").animate({marginLeft: "-=30px"},0);
                },time);
                time += 2000;
                paint("#address2");
                paint(".ptr2");
                paint("#value2");
                setTimeout(()=>{ 
                    $("#address2").css("color","white");
                    $(".ptr2").css("color","white");
                    depaint("#line5");
                    paint("#line4");
                    if(arr[1] == num) {                                         // Check arr[1]
                        setTimeout(()=>{
                            depaint("#line4");
                            paint("#line12");
                            depaint("#value2");
                            let z = document.querySelector("#address2");
                            z.innerHTML = "addr3";
                            $("#tempvar").animate({marginLeft: "+=205px"},3000);
                            paint("#address3");
                            paint(".ptr3");
                            paint("#value3");                                   // 3 -> red
                            setTimeout(()=>{
                                $("#address3").css("color","white");
                                $(".ptr3").css("color","white");
                            },time);
                            time+=3000;
                            $("#node2").fadeOut(3000);
                            $("#tempvar").animate({marginLeft: "-=190px"},0);
                        },time);
                        time += 3000;
                    }else {
                        depaint("#line4");
                        paint("#line5");
                        depaint("#value2");
                        setTimeout(()=>{
                            $("#prevvar").animate({marginLeft: "+=205px"},3000);
                            $("#tempvar").animate({marginLeft: "-=10px"},3000);
                            paint("#address3");
                            paint(".ptr3");
                            paint("#value3");
                        },time);
                        time += 3000;
                        setTimeout(()=>{
                            $("#address3").css("color","white");
                            $(".ptr3").css("color","white");
                            depaint("#line5");
                            paint("#line4");
                            if(arr[2] == num) {                                 // Check arr[2]
                                setTimeout(()=>{
                                    depaint("#line4");
                                    paint("#line12");
                                    depaint("#value3");
                                    const z = document.querySelector("#address3");
                                    z.innerHTML = "addr4";
                                    $("#tempvar").animate({marginLeft: "+=190px"},3000);
                                    paint("#address4");
                                    paint(".ptr4");
                                    paint("#value4");                                   // 4 -> red
                                    setTimeout(()=>{
                                        $("#address4").css("color","white");
                                        $(".ptr4").css("color","white");
                                        document.getElementById("#address1").innerHTML = "addr4";
                                    },time);
                                    time+=3000;
                                    $("#node3").fadeOut(3000);
                                    $("#tempvar").animate({marginLeft: "-=185px"},0);
                                },time);
                                time += 3000;
                            }else {
                                depaint("#value3");
                                setTimeout(()=>{
                                    depaint("#line4");
                                    paint("#line5");
                                    $("#prevvar").animate({marginLeft: "+=190px"},3000);
                                    $("#tempvvar").animate({marginLeft: "+=190px"},3000);
                                    paint("#address4");
                                    paint(".ptr4");
                                    paint("#value4");
                                },time);
                                time += 3000;
                                setTimeout(()=>{
                                    $("#address4").css("color","white");
                                    $(".ptr4").css("color","white");
                                    depaint("#line5");
                                    paint("#line4");
                                    if(arr[3] == num) {                                     // Check arr[3]
                                        setTimeout(()=>{
                                            depaint("#line4");
                                            paint("#line12");
                                            depaint("#value4");
                                            const z = document.querySelector("#address4");
                                            z.innerHTML = "addr5";
                                            $("#tempvar").animate({marginLeft: "+=190px"},3000);
                                            paint("#address5");
                                            paint(".ptr5");
                                            paint("#value5");                                   // 5 -> red
                                            setTimeout(()=>{
                                                $("#address5").css("color","white");
                                                $(".ptr5").css("color","white");
                                                document.getElementById("#address1").innerHTML = "addr5";
                                            },time);
                                            time+=3000;
                                            $("#node4").fadeOut(3000);
                                            $("#tempvar").animate({marginLeft: "-=185px"},0);
                                        },time);
                                        time += 3000;
                                    }else {
                                        depaint("#line4");
                                        paint("#line5");
                                        depaint("#value4");
                                        setTimeout(()=>{
                                            $("#tempvvar").animate({marginLeft: "+=190px"},3000);
                                            $("#prevvar").animate({marginLeft: "+=190px"},3000);
                                            paint("#address5");
                                            paint(".ptr5");
                                            paint("#value5");
                                        },time);
                                        time += 3000;                               // 5 -> red
                                        setTimeout(()=>{
                                            $("#address5").css("color","white");
                                            $(".ptr5").css("color","white");
                                            depaint("#line5");
                                            paint("#line4");
                                            if(arr[4] == num) {
                                                setTimeout(()=>{
                                                    depaint("#line4");
                                                    paint("#line12");
                                                    depaint("#value5");
                                                    const z = document.querySelector("#address5");
                                                    z.innerHTML = "NULL";
                                                    $("#prevvar").animate({marginLeft: "+=60px"},3000);
                                                    $("#tempvvar").animate({marginLeft: "+=60px"},3000);
                                                    $("#node5").fadeOut(3000);
                                                    $(".ptr5").fadeOut(3000);
                                                    $("#tempvar").css("display","none");
                                                },time);
                                                // time += 3000;
                                            } else {
                                                setTimeout(()=>{
                                                    depaint("#line4");
                                                    paint("#line10");
                                                    depaint("#value5");
                                                    $("#tempvvar").animate({marginLeft: "+=60px"},3000);
                                                    $("#prevvar").animate({marginLeft: "+=190px"},3000);
                                                    paint("#address6");
                                                    $("#tempvar").css("display","none");
                                                },time);
                                                // time += 3000;
                                            }
                                        },time);
                                        // time+=3000;
                                    }
                                },time);
                                // time+=3000;
                            }
                        },time);
                        // time+=3000;
                    }
                },time);
                // time+=2000;
            },time);
            // time += 3000;
        }
    },time);
}
// var delay = 2000;
// function start() {
//     var num = document.getElementById("inputed").value;
//     document.getElementById("btn1").disabled = true;
//     setTimeout(()=>{
//         paint("#line1");                                                    
//         $("#tempvar").css("display","block");
//     },time);
//     time += (delay/2);
//     if(num == arr[0]) {                                                     // Check arr[0]
//         setTimeout(()=>{
//             depaint("#line2");
//             paint("#line3");
//             depaint("#value1");
//             $("#tempvar").animate({marginLeft: "+=205px"},3000);
//             paint("#address2");
//             paint(".ptr2");
//             paint("#value2");                                              // 2 -> red
//             setTimeout(()=>{
//                 $("#address2").css("color","white");
//                 $(".ptr2").css("color","white");
//             },time);
//             time += delay;
//             $("#node1").fadeOut(delay);
//             $("#tempvar").animate({marginLeft: "-=195px"},0);
//         },time);
//         time += delay;
//     }
//     let i = 1;
//     while(i < 5) {
//         setTimeout(()=>{
//             let temp1 = "#address" + (i+1).toString();
//             let temp2 = "#value" + (i+1).toString();
//             let temp3 = ".ptr" + i.toString();
//             let temp4 = "#value" + (i+1).toString();
//             let line1 = "#line4", line2 = "#line5";
//             if(arr[i] == num) {
//                 depaint(line1);
//                 paint("#line12");
//                 depaint(temp2);
//                 $("#tempvar").animate({marginLeft: "+=205px"},3000);
//                 paint(temp1);
//                 paint(temp3);
//                 paint(temp4);
//                 $("#node1").fadeOut(delay);
//                 $("#tempvar").animate({marginLeft: "-=195px"},0);
//             } else {
//                 paint(temp1);
//                 paint(temp3);
//                 paint(temp2);
//                 setTimeout(()=> {
//                     $(temp1).css("color","white");
//                     $(temp3).css("color","white");
//                 },time);
//                 time += delay;
//                 $("#tempvar").animate({marginLeft: "+=205px"},delay);
//                 $("#pervvar").animate({marginLeft: "+=205px"},delay);
//             }
//             i++;
//         }, time);
//         time += delay;
//     }
// }