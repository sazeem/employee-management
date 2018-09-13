const employees = require('../models/employeeModel');
const _ = require('lodash');
const sequelize = require('sequelize');

const EmployeeController = {

  employeeList : (req,res) => {
    let limit = req.query.limit;
    let page = req.query.page;
    let totalItems = 0;
    
    employees.findAll()
    .then(totalEmployees => {
      totalItems = totalEmployees.length;
      employees.findAll({
        order:sequelize.literal('id ASC'),
        limit: limit,
        offset: (page-1)*(limit)
      })
      .then(employees => {
        let data ={};
        data.totalItems = totalItems;
        data.items = employees;
        res.send(data);
      })
      .catch(() => console.log("Error"));
    });
  },
  createEmployee : (req,res) => {
    const data = {
      "id":req.body.id,
      "name": req.body.name, 
      "salary":req.body.salary,
      "reporting_manager_id":req.body.reporting_manager_id
    }; 
    employees.create({
      id:data.id,
      name: data.name,
      salary: data.salary,
      reporting_manager_id:data.reporting_manager_id
    })
     .then(() => {
      res.status(201).send(req.body);
     })
     .catch((err) =>{
      res.status(400).send(err.parent.detail);
     });  
  },

  deleteEmployee: (req,res) => {    
    employees.destroy({
      where:{
        id: req.params.id,
      }
    })
    .then((value) => {      
      if(value === 1){
        return res.status(204).send('');
      }
      return res.status(400).send("Error");
    });
  },

  getEmployeeById : (req,res) => {
    employees.findById(req.params.id)
     .then(employee => {
      if(employee.length == {})
        return res.status(400).send("Employee with given ID doesn't exist!");
      res.status(200).send(employee);
     })
     .catch((err) =>{
      res.status(400).send("Employee with given ID doesn't exist!");
     });
  },

  updateEmployee: (req,res) => {
    employees.upsert(req.body)
    .then((changes) => {
      if(changes){
        return res.status(201).send(req.body);
      }
      return res.status(201).send(req.body);
    });
  },

}

module.exports = EmployeeController;
