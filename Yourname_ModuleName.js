let records = [
    {
        "name": "John Tan",
        "gender": "M",
        "age": 23,
        "email": "johnt@gmail.com",
        "healthStatus": "healthy"
    },
    {
        "name": "Sarah Lim",
        "gender": "F",
        "age": 31,
        "email": "sarahL@gmail.com",
        "healthStatus": "unwell"
    },
    {
        "name": "Ahmad Bin Ismail",
        "gender": "M",
        "age": 45,
        "email": "ahmadBinIsmail@gmail.com",
        "healthStatus": "chronic"
    },
    {
        "name": "Priya Devi",
        "gender": "F",
        "age": 19,
        "email": "priyaD@gmail.com",
        "healthStatus": "healthy"
    },
    {
        "name": "Marcus Wong",
        "gender": "M",
        "age": 62,
        "email": "marcusWong@gmail.com",
        "healthStatus": "recovering"
    }
];

module.exports = {
    //Add new record
    addNewRecord(name, gender, age, email, healthStatus) {
        records.push({
            name: name,
            gender: gender,
            age: age,
            email: email,
            healthStatus: healthStatus
        });
        return `New record added for ${name}`;
    },
    //Search record by Name
    searchByName(name) {
        let record = records.find(r => r.name.toLowerCase() == name.toLowerCase());
        if (record) {
            return record;
        } else {
            return `Record for ${name} does not exist.`;
        }
    },
    //Average age of people in each Health Status
    avgAgeHealth(status) {
        let avgAge = 0;
        let record = records.filter(r => r.healthStatus.toLowerCase() == status.toLowerCase());
        record.forEach((record) => {
            avgAge += record.age;
        })
        return `The average age of ${status.toLowerCase()} records is ${avgAge / record.length}`;
    },
    //Amount of records in each Health Status
    amtOfRecordsByHealth(status) {
        let record = records.filter(r => r.healthStatus.toLowerCase() == status.toLowerCase());
        return `The amount of ${status.toLowerCase()} records is ${record.length}`;
    },
    //Update Record
    updateByName(name, { newName, gender, age, email, healthStatus }) {
        let record = records.find(r => r.name.toLowerCase() == name.toLowerCase());

        if (record) {
            if (newName) record.name = newName;
            if (gender) record.gender = gender;
            if (age) record.age = age;
            if (email) record.email = email;
            if (healthStatus) record.healthStatus = healthStatus;

            return `Record for ${record.name} updated successfully.`
        } else {
            return `Record for ${name} does not exist.`;
        }
    },
    //Delete Record
    deleteRecordByName(name) {
        let index = records.findIndex(r => r.name.toLowerCase() == name.toLowerCase());
        if (index !== -1) {
            let deleted = records[index].name;
            records.splice(index, 1)
            return `The record for ${deleted} has been deleted.`;
        } else {
            return `Record for ${name} does not exist.`;
        }
    },
}

console.log(module.exports.addNewRecord("Jack John", "Male", 33, "jj@gmail.com", "healthy"));

console.log(module.exports.searchByName("sarah lim"));

console.log(module.exports.avgAgeHealth("Healthy"));

console.log(module.exports.amtOfRecordsByHealth("chronic"));

console.log(module.exports.updateByName("Priya devi", {email: "priyadevi123@gmail.com", healthStatus: "unwell"}));
console.log(records[3]); //To show updated record

console.log(records[0].name); //First record before deleting
console.log(module.exports.deleteRecordByName("John Tan"));
console.log(records[0].name); //First record after deleting
