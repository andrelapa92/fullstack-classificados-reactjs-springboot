package com.ufsc.file.upload.services.imp;

import com.ufsc.file.upload.exceptions.StorageException;
import com.ufsc.file.upload.exceptions.StorageFileNotFoundException;
import com.ufsc.file.upload.models.FileStorage;
import com.ufsc.file.upload.repositories.FileStorageRepository;
import com.ufsc.file.upload.services.FileStorageService;
import com.ufsc.file.upload.util.StorageProperties;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileStorageImp implements FileStorageService {

    private final Path rootLocation;

    @Autowired
    public FileStorageImp(StorageProperties properties) {
        this.rootLocation = Paths.get(properties.getLocation());
    }

    @Autowired
    FileStorageRepository fileStorageRepository;

    
    @Override
    public void init() {
        try {
        Files.createDirectory(rootLocation);

        } catch (IOException e) {

        throw new StorageException("Could not initialize folder for upload!");

        }
    }

    @Override
    public FileStorage store( MultipartFile multipartFile) {
        try {
            if (multipartFile.isEmpty()) {
                throw new StorageException("Failed to store empty file" + multipartFile.getOriginalFilename());
            }
            
            String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
            FileStorage fileStorage = new FileStorage(null, fileName, 
                    multipartFile.getContentType(), multipartFile.getBytes(), multipartFile.getSize());
            
         
            return fileStorageRepository.save(fileStorage);

        } catch (IOException e) {
            throw new StorageException("Failed to store file" + multipartFile.getOriginalFilename(), e);
        }
    }

    @Override
    public void deleteAll() {

        FileSystemUtils.deleteRecursively(rootLocation.toFile());

    }

    
    public FileStorage update(String id, MultipartFile multipartFile) {
            try{
            FileStorage fileStorageEntity = fileStorageRepository.getReferenceById(id);
		    String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());

            fileStorageEntity.setName(fileName);
            fileStorageEntity.setType(multipartFile.getContentType());
		    fileStorageEntity.setSize(multipartFile.getSize());
		    fileStorageEntity.setData(multipartFile.getBytes());
            
         
            return fileStorageRepository.save(fileStorageEntity);
        
        	} catch (IOException e){
            throw new StorageFileNotFoundException(id);
            }
    }

    public  String deleteById(String id) {
            
            if(!fileStorageRepository.existsById(id)) {
            throw new StorageFileNotFoundException(id);
            }
            fileStorageRepository.deleteById(id);
            
            return "Arquivo " + id + " foi deletado.";
	}    

    public FileStorage findById(String id) {
        
        return fileStorageRepository.findById(id).get();
        
    }

   public List<FileStorage> findAll() {
         return fileStorageRepository.findAll();
    }
}
