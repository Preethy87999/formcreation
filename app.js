var area = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (area == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["empid"] = document.getElementById("empid").value;
     formData["city"] = document.getElementById("city").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["doj"] = document.getElementById("doj").value;
   
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empid;
     cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.city;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.salary;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.doj;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)" >Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("empid").value = "";
    document.getElementById("city").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("doj").value = "";
    selectedRow = null;
}

function onEdit(td) {
    area = td.parentElement.parentElement;
    document.getElementById("name").value = area.cells[0].innerHTML;
    document.getElementById("empid").value = area.cells[1].innerHTML;
    document.getElementById("city").value = area.cells[2].innerHTML;
    document.getElementById("salary").value = area.cells[3].innerHTML;
    document.getElementById("doj").value = area.cells[4].innerHTML;
    
}
function updateRecord(formData) {
    area.cells[0].innerHTML = formData.name;
    area.cells[1].innerHTML = formData.empid;
    area.cells[2].innerHTML = formData.city;
    area.cells[3].innerHTML = formData.salary;
    area.cells[4].innerHTML = formData.doj;
   
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
     if (document.getElementById("city").value == "") {
        isValid = false;
        document.getElementById("cityValidationError").classList.remove("hide");
    } 
    else {
        isValid = true;
        if (!document.getElementById("cityValidationError").classList.contains("hide"))
            document.getElementById("cityValidationError").classList.add("hide");
    }
    return isValid;
}
