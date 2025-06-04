import Request from './base'

export default new Request('user');



// TODO: HOW TO USE
/*
    console.log("LOGIN USER");
    users.innerPost("/login", {
        email: "jose.jlq@hotmail.com",
        password: "65286528"
    }).then( response_user => { console.log(response_user); })
        .catch( err => { console.log("INVALID EMAIL OR PASSWORD"); });


    console.log("CREATING USER");
    users.put({
        email: "jqui2",
        password: "asd",
        name: "prueba"
    }).then( response_user => { console.log(response_user); })
        .catch( err => { console.log("USER ALREADY REGISTERED"); });

    console.log("UPDATING USER");
    users.put({
        email: "jqui3",
        password: "asd",
        name: "prueba2"
    }).then( response_user => { console.log(response_user); })
        .catch( err => { console.log("USER DOES NOT EXITS"); });
*/