
document.getElementById('reloadButton').addEventListener('click', function() {
    // Generate new data and update the displayed information
    var person = personGenerator.getPerson();
    document.getElementById('genderOutput').textContent = "Gender: " + person.gender;
    document.getElementById('firstNameOutput').textContent = "First Name: " + person.firstName;
    document.getElementById('patronomycNameOutput').textContent = "Patronymic: " + person.randomPatronymic;
    document.getElementById('surnameOutput').textContent = "Surname: " + person.surname;
    document.getElementById('birthDateOutput').textContent = "Date: " + person.Date;
    document.getElementById('birthOutput').textContent = "Birth: " + person.birth;
    document.getElementById("jobOutput").textContent = "Job: " + person.Job;
});

// Generate initial data and display it when the page loads
var initialPerson = personGenerator.getPerson();
document.getElementById('genderOutput').textContent = "Gender: " + initialPerson.gender;
document.getElementById('firstNameOutput').textContent = "First Name: " + initialPerson.firstName;
document.getElementById('patronomycNameOutput').textContent = "Patronymic: " + initialPerson.randomPatronymic;
document.getElementById('surnameOutput').textContent = "Surname: " + initialPerson.surname;
document.getElementById('birthDateOutput').textContent = "Date: " + initialPerson.Date;
document.getElementById('birthOutput').textContent = "Birth: " + initialPerson.birth;
document.getElementById('jobOutput').textContent = "Job: " + initialPerson.Job;
