import { parseArguments } from './parseArguments';

export const calculateBmi = (height: number, weight: number): string => {
  const heightInMeters: number = height * 0.01;
  const bmi: number = weight / (heightInMeters * heightInMeters);

  if (bmi < 18.5) {
    return 'Underweight';
  }
  if (bmi < 25) {
    return 'Normal (healthy weight)';
  }
  if (bmi < 30) {
    return 'Overweight';
  }
  if (bmi < 35) {
    return 'Obese';
  }
  return 'Extremely obese';
};

const [height, weight] = parseArguments(process.argv);

calculateBmi(height, weight);
