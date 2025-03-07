import patients from '../data/patients';
import {
  PatientEntry,
  NonSentitivePatientEntry,
  NewPatientEntry,
} from '../types';
import { v4 as uuidv4 } from 'uuid';

const getPatientsEntries = (): Array<PatientEntry> => {
  return patients;
};

const getNonSensitivePatientsEntries = (): Array<NonSentitivePatientEntry> => {
  return patients.map(({ name, dateOfBirth, gender, occupation, id }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatientEntry = (patient: NewPatientEntry): PatientEntry => {
  const newPatient: PatientEntry = {
    id: uuidv4(),
    ...patient,
  };
  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatientsEntries,
  getNonSensitivePatientsEntries,
  addPatientEntry,
};
