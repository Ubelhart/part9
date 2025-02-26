import { parseArguments } from './parseArguments';

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercises = (
  hoursPerDay: number[],
  objectivePerDay: number
): Result => {
  const periodLength: number = hoursPerDay.length;
  const trainingDays = hoursPerDay.reduce((acc, day) => {
    if (day > 0) {
      acc++;
    }
    return acc;
  }, 0);

  const target = objectivePerDay;

  const average =
    hoursPerDay.reduce((acc, day) => {
      if (day > 0) {
        acc += day;
      }
      return acc;
    }, 0) / periodLength;
  const success = average >= target;

  const rating: number = average >= target ? 3 : average <= target / 2 ? 1 : 2;

  let ratingDescription = '';
  switch (rating) {
    case 3:
      ratingDescription = 'Excellent';
      break;
    case 2:
      ratingDescription = 'not too bat but could be better';
      break;
    default:
      ratingDescription = 'bad';
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

const parsedArguments = parseArguments(process.argv);
const hoursPerDay = parsedArguments.slice(1);
const objectivePerDay = parsedArguments.slice(0, 1);

calculateExercises(hoursPerDay, objectivePerDay[0]);
