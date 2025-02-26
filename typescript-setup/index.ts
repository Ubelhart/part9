import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;
  if (typeof height !== 'string' || typeof weight !== 'string') {
    res.status(400).send({ error: 'malformed parameters' });
    return;
  }
  const bmi = calculateBmi(Number(height), Number(weight));
  res.send({ weight, height, bmi });
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;
  if (!daily_exercises || !target) {
    res.status(400).send({ error: 'malformed parameters' });
    return;
  }

  const hoursPerDay = daily_exercises as number[];
  const parsedArray = hoursPerDay.map((day) => Number(day));

  if (parsedArray.some((day) => isNaN(day)) || isNaN(Number(target))) {
    res.status(400).send({ error: 'malformed parameters' });
    return;
  }

  const exercises = calculateExercises(parsedArray, Number(target));
  res.send(exercises);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
