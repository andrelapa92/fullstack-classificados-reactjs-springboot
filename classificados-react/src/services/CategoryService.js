import api from "./api";

class CategoryService{

    getAll(){
        return api.get("/categorias");
    }

    get(id){
        return api.get(`/categorias/${id}`);
    }

    create(category){
        return api.post("/categorias", category);
    }

    update(id, category){
        return api.put(`/categorias/${id}`, category);
    }

    delete(id){
        return api.delete(`/categorias/${id}`);
    }
    
}

export default new CategoryService();