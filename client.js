const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT



function bonusCalc(array) {
  let employeeBonus = {};
for (let i = 0; i < array.length; i++){

  let bonus = 0;

  if (array[i].reviewRating === 5) {

    bonus = .1;

  } else if (array[i].reviewRating === 4) {

    bonus = .06;

  } else if (array[i].reviewRating === 3) {

    bonus = .04;
  } else if (array[i].reviewRating <= 2) {

    bonus = 0;

  }

  if (array[i].employeeNumber.length >= 4) {

    bonus += .05;

  }

  if (Number(array[i].annualSalary) > 65000) {

    bonus -= .01;

  }

  if (bonus > .13) {

    bonus = .13;
  } else if (bonus < 0) {

    bonus = 0;

  }
   employeeBonus = {
    name: array[i].name,
    bonusPercentage: bonus,
    totalBonus: parseInt(array[i].annualSalary * bonus),
    totalCompensation: Number(array[i].annualSalary) + Number(array[i].annualSalary) * bonus
  };

  console.log(employeeBonus);
  } // end for loop
    return employeeBonus;

}

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(bonusCalc(employees));
