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

}
