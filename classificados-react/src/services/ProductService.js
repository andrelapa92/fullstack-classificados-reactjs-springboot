import api from "./api";

class ProductService{
    
    getAll(){
        return api.get("/produtos");
    }

    get(id){
        return api.get(`/produtos/${id}`);
    }

    create(product){
        return api.post("/produtos", product);
    }

    update(id, product){
        return api.put(`/produtos/${id}`, product);
    }

    delete(id){
        return api.delete(`/produtos/${id}`);
    }

    vinculaCategoria(id, produtoCadastrado, id_categoria, product){
        return api.get(`/produtos/1/addCategoria/${id_categoria}`, produtoCadastrado, product);
    }
}

export default new ProductService();