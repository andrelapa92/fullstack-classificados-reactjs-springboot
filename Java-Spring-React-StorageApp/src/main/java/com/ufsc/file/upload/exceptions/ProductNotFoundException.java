package com.ufsc.file.upload.exceptions;

public class ProductNotFoundException extends RuntimeException {
    
    public ProductNotFoundException (Long id) {
        super( "Não foi possível encontrar o produto " + id );
    }
    
}
