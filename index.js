// Your code here
function createEmployeeRecord(employee) {
    return {
      firstName: employee[0],
      familyName: employee[1],
      title: employee[2],
      payPerHour:employee[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  function createEmployeeRecords(employee) {
    return employee.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(employee, dateStamp) {
    const [date, time] = dateStamp.split(' ');
  
    employee.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(time, 10),
      date
    });
  
    return employee;
  }
  
  function createTimeOutEvent(employee, dateStamp) {
    const [date, time] = dateStamp.split(' ');
  
    employee.timeOutEvents.push({
      type: 'TimeOut',
      hour: parseInt(time, 10),
      date
    });
  
    return employee;
  }
  
  function hoursWorkedOnDate(employee, date) {
    const timeIn = employee.timeInEvents.find(event => event.date === date).hour;
    const timeOut = employee.timeOutEvents.find(event => event.date === date).hour;
  
    return (timeOut - timeIn) / 100;
  }
  
  function wagesEarnedOnDate(employee, date) {
    const hours = hoursWorkedOnDate(employee, date);
    return hours * employee.payPerHour;
  }
  
  function allWagesFor(employee) {
    const dates = employee.timeInEvents.map(event => event.date);
  
    return dates.reduce((Wages, date) => {
      return Wages + wagesEarnedOnDate(employee, date);
    }, 0);
  }
  
  function calculatePayroll(employee) {
    return employee.reduce((Payroll, employee) => {
      return Payroll + allWagesFor(employee);
    }, 0);
  }
  

  