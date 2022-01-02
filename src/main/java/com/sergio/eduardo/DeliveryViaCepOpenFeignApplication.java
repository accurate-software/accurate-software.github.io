package com.sergio.eduardo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class DeliveryViaCepOpenFeignApplication {

	public static void main(String[] args) {
		SpringApplication.run(DeliveryViaCepOpenFeignApplication.class, args);
	}

}
