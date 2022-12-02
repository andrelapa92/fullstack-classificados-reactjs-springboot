import api from "./api";

class ImgService {

    get(id) {
        return api.get(`/files/${id}`);
    }

    upload(file) {
        let formData = new FormData();
    
        formData.append("file", file);
    
        let response = api.post("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then((data) => {
          return data.data;
        });
        
        return response;

      }

}

export default new ImgService();