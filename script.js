const nameInput = document.getElementById("name");
const professionInput = document.getElementById("profession");
const ageInput = document.getElementById("age");
const addUserBtn = document.getElementById("addUser");
const message = document.getElementById("message");
const employeeList = document.getElementById("employeeList");
const employeeCount = document.getElementById("employeeCount");

let employees = [];
addUserBtn.addEventListener("click", function () {

    const name = nameInput.value.trim();
    const profession = professionInput.value.trim();
    const age = ageInput.value.trim();

   
    if (name === "" || profession === "" || age === "") {
        message.textContent =
            "Error: Please make sure all the fields are filled before adding an employee!";

        message.className = "error";
        return;
    }
    const employee = {
        id: 0,
        name: name,
        profession: profession,
        age: age
    };
    employees.push(employee);
    message.textContent = "Success: Employee Added!";
    message.className = "success";
    nameInput.value = "";
    professionInput.value = "";
    ageInput.value = "";
    displayEmployees();
});

function displayEmployees() {

    employeeList.innerHTML = "";

    employees.forEach((employee, index) => {

        const employeeDiv = document.createElement("div");
        employeeDiv.className = "employee";

        const details = document.createElement("div");
        details.className = "employee-details";

        const number = document.createElement("span");
        number.textContent = `${index + 1}.`;

        const empName = document.createElement("span");
        empName.textContent = `Name: ${employee.name}`;

        const empProfession = document.createElement("span");
        empProfession.textContent = `Profession: ${employee.profession}`;

        const empAge = document.createElement("span");
        empAge.textContent = `Age: ${employee.age}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete User";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", function () {

            employees = employees.filter(emp => emp.id !== employee.id);

            displayEmployees();

        });

        details.append(number, empName, empProfession, empAge);

        employeeDiv.append(details, deleteBtn);

        employeeList.appendChild(employeeDiv);

    });

    
    employeeCount.textContent =
        `You have ${employees.length} Employees.`;
}