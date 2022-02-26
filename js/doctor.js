
json = {};
filter_show()

function drawJSON(json)
{
    let list = "<div>";

    for (let cat in json){
        for (var data=0; data<json[cat].length; data++){
            list +='<div class="col-12 pb-3">';
            list +='<div class="container p-4 shadow-sm bg-white border" style="border-radius: 25px;" id="doctorCard">';
            list += '<div class="col-12  border-bottom  pb-3">';
            list += '<small class="bg-primary text-white rounded-pill p-2 fw-bold" id="doctor_speciality">'+ json[cat][data]["doctor_speciality"] +'</small>';
            list += '</div>';
            list += '<div class="col-12 mt-3">';
            list += '<div class="row align-items-center">';
            list += '<div class="col-lg-8 col-12 mb-2">';
            list += '<h3 class="display fw-bold " id="doctor_name" >'+ json[cat][data].doctor_name +'</h3>';
            list += '<small class="fw-bold" id="doctor_experience"><i class="fa-solid fa-circle-check me-2 text-primary"></i>'+ json[cat][data].doctor_experience +'</small>';
            list += '<br>';
            list += '<small class="fw-bold" id="doctor_date"><i class="fa-solid fa-calendar-days me-2 text-primary"></i>'+ json[cat][data].doctor_date +'</small>';
            list += '<br>';
            list += '<small class="fw-bold" id="doctor_time"><i class="fa-solid fa-clock me-2 text-primary"></i>'+ json[cat][data].doctor_time +'</small>';
            list += '</div>';
            list += '<div class="col-lg-4 col-12">';
            list += '<a href="" class="btn btn-outline-primary rounded-pill fw-bold d-flex ms-auto align-items-center justify-content-center" id="doctor_book" style="min-width: fit-content;" role="button"><i class="fa-solid fa-hands-clapping me-2"></i>Book appointment</a>';
            list += '</div>';
            list += '</div>';
            list += '</div>';
            list += '</div>';
            list +='</div>';
        }
    }
    list += "</div>";
    return list;
}



function filter_show(element)
  {
    var cardioCheck = document.getElementById("cardioCheck");
    var dentCheck   = document.getElementById("dentCheck");
    var dermaCheck  = document.getElementById("dermaCheck");
    var orthoCheck  = document.getElementById("orthoCheck");
    var respCheck   = document.getElementById("respCheck");
    var endoCheck   = document.getElementById("endoCheck");

  
    if (cardioCheck.checked == true){   
        json["cardio"] = all_doctors.cardio;
        document.getElementById("doctorCount").innerHTML = all_doctors.cardio.length
    } else {
        delete json["cardio"];
    }

    if (dentCheck.checked == true){   
        json["dentist"] = all_doctors.dentist;
        document.getElementById("doctorCount").innerHTML = all_doctors.dentist.length
    } else {
        delete json["dentist"];
    }

    if (dermaCheck.checked == true){   
        json["derma"] = all_doctors.derma;
        document.getElementById("doctorCount").innerHTML = all_doctors.derma.length
    } else {
        delete json["derma"];
    }

    if (orthoCheck.checked == true){   
        json["ortho"] = all_doctors.ortho;
        document.getElementById("doctorCount").innerHTML = all_doctors.ortho.length
    } else {
        delete json["ortho"];
    }

    if (respCheck.checked == true){   
        json["resp"] = all_doctors.resp;
        document.getElementById("doctorCount").innerHTML = all_doctors.resp.length
    } else {
        delete json["resp"];
    }

    if (endoCheck.checked == true){   
        json["endo"] = all_doctors.endo;
        document.getElementById("doctorCount").innerHTML = all_doctors.endo.length
    } else {
        delete json["endo"];
    }
    
    var count = Object.keys(json).length;
    if (count == 0){
        document.getElementById("selected_doctors").innerHTML = drawJSON(all_doctors);
        document.getElementById("doctorCount").innerHTML = all_doctors.cardio.length + all_doctors.dentist.length + all_doctors.ortho.length + all_doctors.derma.length
        + all_doctors.endo.length + all_doctors.resp.length;
    } else{
        document.getElementById("selected_doctors").innerHTML = drawJSON(json);
    }
    
}  
  