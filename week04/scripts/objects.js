// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections:
        [
            { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
            { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A" },

        ],

    enrollStudent: function (sectionNum) {


        const index = this.sections.findIndex((section) => section.sectionNum == sectionNum);

        if (this.sections[index].sectionNum >= 0) {

            this.sections[index].enrolled++;
            renderSections(this.sections);
        };



    },

    dropStudent: function (sectionNum) {
        const index = this.sections.findIndex((section) => section.sectionNum == sectionNum);

        if (this.sections[index].sectionNum >= 0) {
            this.sections[index].enrolled--;
            renderSections(this.sections);
        }
    }
};




function setHTML(courseObject) {
    courseName = document.querySelector("#courseName");
    courseCode = document.querySelector("#courseCode");

    courseName.textContent = courseObject.name;
    courseCode.textContent = courseObject.code;
}


function sectionTemplate(section) {
    return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");

}



setHTML(aCourse);

renderSections(aCourse.sections);






// enrolling students


const enrollButton = document.querySelector("#enrollStudent");

enrollButton.addEventListener("click", function () {

    const inputSection = document.querySelector("#sectionNumber");

    const section = inputSection.value;

    aCourse.enrollStudent(section);


});




// dropping students

document.querySelector("#dropStudent").addEventListener("click", function () {

    const section = document.querySelector("#sectionNumber").value;

    aCourse.dropStudent(section);

});







let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];


let namesB = names.filter(name => name.charAt(0) == "B");

console.log(namesB);


let namesLength = names.map(name => name.length);

console.log(namesLength);


let reducednames = names.reduce((total, name) => total + name.length, 0) / names.length;

console.log(reducednames);