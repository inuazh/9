
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('patronomycNameOutput').innerText = initPerson.randomPatronymic;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById("birthOutput").textContent = initPerson.birth;
    document.querySelector("#birthDateOutput").textContent = initPerson.Date;
    document.querySelector("#jobOutput").textContent = initPerson.Job;
};
