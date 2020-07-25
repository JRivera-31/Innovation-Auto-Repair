let appointmentSeeds = [
    {
        name: "Test Tester",
        email: "test@test.com",
        phonenumber: "555 555 5555",
        description: "dfasfasfasdf",
        date: "07 13 2020",
        time: "11 00"
    },
    {
        name: "Second Test",
        email: "test3@test.com",
        phonenumber: "565 555 5555",
        description: "dfasfasfasdf",
        date: "07 15 2020",
        time: "17 00"
    }
]

let blockoutSeeds = [
    {
        date: '07 17 2020'
    },
    {
        date: '07 23 2020'
    }
]

const postData = async (appointmentSeeds) => {
    const contentType = "application/json"

    try {
        await fetch("/api/appointment", {
            method: "POST",
            headers: {
                Accept: contentType,
                "Content-Type": contentType
            }, 
            body: appointmentSeeds
        })
    } catch (err) {
        console.log(err)
    }
}


// db.Appointments.deleteMany({})
//     .then(() => db.Appointments.collection.insertMany(appointmentSeeds))
//     .then(data => {
//         console.log(data.result.n + " seeds entered")
//         process.exit(0)
//     })
//     .catch(err => {
//         console.log(err)
//         process.exit(1)
//     })    

// db.Blockout.deleteMany({})
//     .then(() => {
//         db.Blockout.collection.insertMany(blockoutSeeds)
//             .then(data => {
//                 console.log(data);
//                 process.exit(0);
//             })
//             .catch(err => {
//                 console.log(err);
//                 process.exit(1);
//             })
//     })