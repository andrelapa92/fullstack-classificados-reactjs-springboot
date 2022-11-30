
package com.ufsc.file.upload.services;

import org.springframework.core.io.Resource;

public interface FileDownloadService {
    
      public Resource getFileAsResource(String fileCode);

    
}
