const students=[
    {
        name:"Divyanshu",
        course:"Full Stack Development",
        marks:[90,80,70,68,59]
    },
    {
        name:"Rohit",
        course:"Data Science",
        marks:[85,75,65,55,45]
    },
    {
        name:"Anjali",
        course:"Machine Learning",
        marks:[95,85,75,65,55]
    }   
]
/*Problem statement: convert the given objects in array in below format max marks is 500. if percentage is above 60 then result status is pass otherwise fail.:
[
    {
        name:"Divyanshu",
        course:"Full Stack Development",
        marks:[90,80,70,68,59],
        totalMarks:367,
        percentage:73.4,
        resultStatus:"Pass"
    },
*/
const updatedStudents=students.map(student=>{
    const totalMarks=student.marks.reduce((acc,mark)=>acc+mark,0);
    const percentage=(totalMarks/500)*100;
    const resultStatus=percentage>60?"Pass":"Fail";
    return {
        ...student,
        totalMarks,
        percentage,
        resultStatus
    }
});
console.log(updatedStudents);
// Use filter function to get the students who have passed the course

// Use filter function to get the students who have failed the course
const passedStudents=updatedStudents.filter(student=>student.resultStatus==="Pass");
console.log("Passed Students:",passedStudents);

const failedStudents=updatedStudents.filter(student=>student.resultStatus==="Fail");
console.log("Failed Students:",failedStudents);
