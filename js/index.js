let taskCount = 0;
const addTask = () => {
    const taskName = document.getElementById("task").value.trim();
    const personAssigned = document.getElementById("taskername").value.trim();
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

// status should be text + color
    let statusText = "";
    let statusColor = "";

    if (!endDate || endDate === "") {
        statusText = "Not Done";
        statusColor = "red";
        alert("Input end date to mark as complete");
    } else {
        statusText = "Done";
        statusColor = "green";
    }


    if(!taskName || taskName === "" || !personAssigned || personAssigned === "" || !startDate   ){
        alert("Kindly fill in the necessary parts");
        return;
    };

    const listTable = document.querySelector("#myTasks tbody");
    taskCount++;

    const taskRow = document.createElement("tr");

    taskRow.innerHTML = `
    <td>${taskCount}</td>
    <td>${taskName}</td>
    <td>${personAssigned}</td>
    <td>${startDate}</td>
    <td>${endDate}</td>
    <td>${statusText}</td>
    `;

    taskRow.lastElementChild.style.backgroundColor = statusColor;


    listTable.appendChild(taskRow);
    // clearing the inputs
    document.getElementById("task").value = "";
    document.getElementById("taskername").value = "";
    document.getElementById("start-date").value = "";
    document.getElementById("end-date").value = "";

};

document.getElementById("add").addEventListener("click", addTask);