"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../data/patients"));
const uuid_1 = require("uuid");
const getPatientsEntries = () => {
    return patients_1.default;
};
const getNonSensitivePatientsEntries = () => {
    return patients_1.default.map(({ name, dateOfBirth, gender, occupation, id }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};
const addPatientEntry = (patient) => {
    const newPatient = Object.assign({ id: (0, uuid_1.v4)() }, patient);
    patients_1.default.push(newPatient);
    return newPatient;
};
exports.default = {
    getPatientsEntries,
    getNonSensitivePatientsEntries,
    addPatientEntry,
};
