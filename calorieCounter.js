const calories = 180;

const calories2 = '180';


const snack = {
    calories: 189,
    description: 'Snickers'
}

const updatedCalories = {
    calories: snack.calories + 150,
    description: snack.description
}

const meals = [
    { description: 'Breakfast', calories: 469},
    { description: 'Lunch', calories: 500;}
]

function checkGrade(grade) {
    if (grade >= 90) {
        console.log('A');
    }
    else if (grade >= 80) {
        console.log('B');
    }
    else if (grade >= 70) {
        console.log('C');
    }
    else if (grade >= 60) {
        console.log('D');
    }
    else {
        console.log('F')
    }
}

const name = 'James';
function greet(greeting,nameinput) {
  return greeting + ' ' + name
}
const greeting = greet('Good Day', name);


console.log(greeting); 



