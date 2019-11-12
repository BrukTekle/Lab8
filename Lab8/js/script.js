
(function(){

const studentsData = [];
setInterval(() => {
    $("#clock").text(new Date());
}, 1000);

const addStudent = function(student) {
    addStudentToListView(student);
    addStudentToArrayData(student);
}

const addStudentToListView = function(student) {
    const newListItem = "<li class='list-group-item'>" + student.studentId + " - " + student.firstName + "</li>";
    $("#list").append(newListItem);
}

const addStudentToArrayData = function(student) {
    studentsData.push(student);
}


    $.ajax({
        url: "data/students.json",
        type: "GET",
        dataType: "jsonp"
    }).done(function(studentsData) {
        studentsData.forEach((objStudent) => {
            addStudent(objStudent);
        });
    }).fail(function(xhr, status, err) {
        alert("Error: " + status + " - " + err);
    }).always(function(xhr, status) {

    });   

$("#myForm").on("submit", function(event) {
    event.preventDefault();
    const studentId = $("#studentID").val();
    const firstName = $("#firstName").val();
    const objNewStudent = {
        "studentId": studentId,
        "firstName": firstName
    };
    addStudent(objNewStudent);
    $("#studentID").val("");
    $("#firstName").val("");
    $("#studentID").focus();
});

$("#studentID").focus();
})();
