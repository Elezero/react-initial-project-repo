import Request from './base'

export default new Request('message');



// TODO: HOW TO USE --------------
/*
    console.log("GETTING ALL MESSAGES");
    messages.get().then( response_messages => console.log({response_messages}));

    console.log("GETTING MESSAGE BY ID");
    messages.get({
        idname: "messageid",
        id: "26bb9441-cbca-4bfc-bb21-e7bc413196ac"
    }).then( response_message => console.log({response_message}));

    console.log("CREATING MESSAGE")
    messages.post({
            message: "Hola desde react"
    }).then( response_message => { console.log(response_message); });

    console.log("UPDATING MESSAGE")
    messages.put({
            messageid: "bc271c90-165c-46c5-8eef-843eafef8620",
            message: "Hola desde react2"
    }).then( response_message => { console.log(response_message); });

    console.log("DELETING MESSAGE");
    messages.delete({
        messageid: "26bb9441-cbca-4bfc-bb21-e7bc413196ac"
    }).then( response_message => { console.log(response_message); })
*/