package com.main.agro_fundx_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.main.agro_fundx_backend.service.DocumentService;

import java.io.IOException;

@SpringBootApplication
@RestController
@RequestMapping("/image")
public class DocumentController {

	@Autowired
	private DocumentService service;

	@PostMapping("/{email}")
	public ResponseEntity<?> uploadImage(@RequestParam("image")MultipartFile file , @PathVariable String email) throws IOException {
		String uploadImage = service.uploadImage(file , email);
		return ResponseEntity.status(HttpStatus.OK)
				.body(uploadImage);
	}

	@GetMapping("/{email}")
	public ResponseEntity<?> downloadImage(@PathVariable String email){
		byte[] imageData=service.downloadImage(email);
		return ResponseEntity.status(HttpStatus.OK)
				.contentType(MediaType.valueOf("image/png"))
				.body(imageData);

	}
}