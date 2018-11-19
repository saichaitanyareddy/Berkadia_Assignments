function college(students) {
    for (var i in students) {
        document.writeln(students[i].Roll_no + "  " + students[i].Name + "  " + students[i].Marks + '<br/>');
        console.log(students[i].Roll_no + "  " + students[i].Name + "  " + students[i].Marks);
    }
}
var students = [
    { Roll_no: 1, Name: "Sai", Marks: 100 },
    { Roll_no: 2, Name: "chaitanya", Marks: 90 },
    { Roll_no: 3, Name: "Madhu", Marks: 100 },
    { Roll_no: 4, Name: "Hari", Marks: 80 },
    { Roll_no: 5, Name: "Pradeep", Marks: 75 }
];
college(students);
