package com.ufsc.file.upload.teste;

import com.ufsc.file.upload.models.Categoria;
import com.ufsc.file.upload.models.Produto;
import com.ufsc.file.upload.repositories.CategoriaRepository;
import com.ufsc.file.upload.repositories.ProdutoRepository;
import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("test")
public class Setup implements CommandLineRunner{
    
    @Autowired
    private CategoriaRepository categoriaRepository;
    
    @Autowired
    private ProdutoRepository produtoRepository;
   
    @Override
    public void run(String...args) throws Exception{
        
        Categoria cat1 = new Categoria (null, "Moda");
        Categoria cat2 = new Categoria (null, "Eletrônicos");
        Categoria cat3 = new Categoria (null, "Veículos");
        
        categoriaRepository.saveAll(Arrays.asList(cat1,cat2,cat3));
       
        Produto p1 = new Produto (null, "IPhone 12", 5000, 15, cat2);
        Produto p2 = new Produto (null, "Notebook Dell", 4500, 20, cat2);
        Produto p3 = new Produto (null, "Camiseta básica", 40, 30, cat1);
        Produto p4 = new Produto (null, "Bolsa de couro", 800, 12, cat1);
        Produto p5 = new Produto (null, "Onix LTZ", 300, 3, cat3);
       
        produtoRepository.saveAll(Arrays.asList(p1,p2,p3,p4,p5));
        
    }
    
}
