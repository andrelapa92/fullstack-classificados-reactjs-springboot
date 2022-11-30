
package com.ufsc.file.upload.services;

import com.ufsc.file.upload.models.FileStorage;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;


public interface FileStorageService {
    
   public void init();
   
   public void deleteAll();
   
   public FileStorage store( MultipartFile multipartFile);
   
   public FileStorage update(String id, MultipartFile multipartFile);
     
   public String deleteById(String id);
	
	public List<FileStorage> findAll();
		
	public FileStorage findById(String id);
		
}
