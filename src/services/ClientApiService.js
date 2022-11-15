import ApiService from "./ApiService";

export default class ClientApiService extends ApiService {

    constructor(){
        super('/person');
    }

    create(object){
        return this.post('', object);
    }

    update(id, object){
        return this.put(`${id}`, object);
    }

    delete(id){
        return super.delete(`${id}`);
    }

    find(params){
        return this.get(`${params}`);
    }

}