"use strict";
const generateDummyData = (num) => {
  const data = [];
  for (let i = 1; i <= num; i++) {
    data.push({
      id: i,
      title: `course ${i}`,
      description: `content of course ${i}`,
      instructor: `instructor ${i}`,
      duration: `${i} hours`,
      level: i % 3 === 0 ? "advanced" : i % 2 === 0 ? "intermediate" : "beginner",
      rating: (Math.random() * 5).toFixed(1),
      students: Math.floor(Math.random() * 1000),
      language: i % 2 === 0 ? "English" : "Spanish",
    });
  }
  return data;
};

const data = generateDummyData(100);


