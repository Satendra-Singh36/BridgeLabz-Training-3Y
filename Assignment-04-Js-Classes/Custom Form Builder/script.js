
// Q4: Custom Form Builder (Forms + Classes)

// Creating FormBuilder class
class FormBuilder {

    // Constructor
    constructor(fields) {
        this.fields = fields;
    }

    // Method to create dynamic form
    createForm() {

        let formHTML = `<form id="myForm">`;

        // Loop through fields array
        this.fields.forEach((field, index) => {

            formHTML += `
                <label>${field.label}</label>
                <input 
                    type="${field.type}" 
                    id="field${index}"
                    name="${field.label}"
                    placeholder="Enter ${field.label}"
                >
                <br><br>
            `;
        });

        formHTML += `
            <button type="submit">Submit</button>
            </form>
            <div id="result"></div>
        `;

        // Display form using innerHTML
        document.body.innerHTML = formHTML;

        // Selecting form
        let form = document.getElementById("myForm");

        // Submit event
        form.addEventListener("submit", (event) => {

            event.preventDefault();

            // Getting form data
            let data = this.getFormData();

            console.log(data);

            document.getElementById("result").innerText =
                JSON.stringify(data, null, 2);
        });
    }

    // Method to get all entered values
    getFormData() {

        let formData = {};

        this.fields.forEach((field, index) => {

            let value = document.getElementById(`field${index}`).value;

            formData[field.label] = value;
        });

        return formData;
    }
}

// Creating array of fields
let fields = [
    {
        type: "text",
        label: "Username"
    },
    {
        type: "email",
        label: "Email"
    },
    {
        type: "password",
        label: "Password"
    },
    {
        type: "number",
        label: "Age"
    }
];

// Creating object of FormBuilder class
let myForm = new FormBuilder(fields);

// Calling createForm method
myForm.createForm();
