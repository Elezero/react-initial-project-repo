import axios from 'axios';
import { Service } from 'axios-middleware';

const _path = 'message/list';
const base = 'https://tfrm34b54f.execute-api.us-east-1.amazonaws.com/Prod/';
const _headers = {};




class Register {
    constructor() {
        if (typeof Register.instance === 'object') return Register.instance; // SINGLETON
        Register.instance = this;
    }

    onResponse(response){
        const _response = JSON.parse(response.data);
        return _response;
    }
}




class Request {
    constructor(url, baseURL){
        this.url = url;
        this.baseURL = baseURL || base;
        this.request = axios.create({
            baseURL: this.baseURL, headers: _headers
        });

        const service = new Service(this.request);
        service.register(new Register());
    }


    list() {
        return this.request({ url: this.url, method: 'GET' });
    }

    get(id={idname: "", id: ""}){
        return this.request({ url: this.url+"?"+id.idname+"="+id.id, data: '', method: 'GET' });
    }

    post(object){
        return this.request({ url: this.url, data: object, method: 'POST' });
    }

    put(identified_object){
        return this.request({ url: this.url, data: identified_object, method: 'PUT' });
    }

    delete(identified_object){
        return this.request({ url: this.url, data: identified_object, method: 'DELETE'});
    }



    /** --------------------
     * 
     * METHODS WITH INNER URL
     * Ex:    POST-> message/create
     * 
     */
    innerList(inner_url='') {
        return this.request({ url: this.url+inner_url, method: 'GET' });
    }

    innerGet(inner_url='', id={idname: "", id: ""}){
        return this.request({ url: this.url+inner_url+"?"+id.idname+"="+id.id, data: '', method: 'GET' });
    }

    innerPost(inner_url='', object){
        return this.request({ url: this.url+inner_url, data: object, method: 'POST' });
    }

    innerPut(inner_url='', identified_object){
        return this.request({ url: this.url+inner_url, data: identified_object, method: 'PUT' });
    }

    innerDelete(inner_url='',identified_object){
        return this.request({ url: this.url+inner_url, data: identified_object, method: 'DELETE'});
    }
}


export default Request

/*
axios.get( base + _path, {
    headers: _headers,
}).then( // devuelve una promesa
    response => console.log({response})
); 
*/