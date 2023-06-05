import React, { useEffect } from "react";
import StudentListHeader from "./StudentListHeader";
import StudentListItem from "./StudentListItem";

const STUDENT_DATA = [
  {
    name: "Eneh Mercy",
    studentId: 703703,
    email: "michelle.rivera@example.com",
    class: "JSS 2",
    gender: "Female",
  },
  {
    name: "Mervin McKinney",
    studentId: 877037,
    email: "kenzi.lawson@example.com",
    class: "JSS 3",
    gender: "Female",
  },
  {
    name: "Cody Fisher",
    studentId: 547030,
    email: "tim.jennings@example.com",
    class: "SS 3",
    gender: "Female",
  },
];

const StudentList = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <StudentListHeader />
      <div>
        {STUDENT_DATA.map((item, index) => (
          <StudentListItem item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
