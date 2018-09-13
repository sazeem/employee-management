const express = require('express');
const EmployeeController = require('../controllers/employeeController');
const mw = require('../controllers/middleware');

const employeeRoutes = () => {
  const employeeRoutes = express.Router();
  employeeRoutes.get('/employees', EmployeeController.employeeList);
  employeeRoutes.get('/employees/:id', EmployeeController.getEmployeeById);
  employeeRoutes.post('/employees', EmployeeController.createEmployee);
  employeeRoutes.put('/employees', EmployeeController.updateEmployee);
  employeeRoutes.delete('/employees/:id', EmployeeController.deleteEmployee);
  employeeRoutes.get('/employees/:id', EmployeeController.getEmployeeById);
  return employeeRoutes;
}

module.exports = employeeRoutes;
