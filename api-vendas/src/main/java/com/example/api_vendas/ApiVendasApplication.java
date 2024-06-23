package com.example.api_vendas;

import com.example.api_vendas.model.Product;
import com.example.api_vendas.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ApiVendasApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiVendasApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(ProductRepository productRepository){
		return agrs -> {
			productRepository.deleteAll();
			Product product = new Product();
			product.setName("joao");
			product.setReference("1234");
			product.setAmount(12);
			product.setBrand("oioi");
			product.setImage("https://lojaacal.vteximg.com.br/arquivos/ids/166013-1000-1000/conjunto-de-tomada-simples-10a-branco-pial-legrand-376518.jpg?v=637389008899630000");

			productRepository.save(product);
		};
	}

}
