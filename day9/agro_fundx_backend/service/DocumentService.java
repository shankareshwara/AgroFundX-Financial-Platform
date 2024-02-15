package com.main.agro_fundx_backend.service;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.main.agro_fundx_backend.entity.Document;
import com.main.agro_fundx_backend.repository.DocumentRepository;
import com.main.agro_fundx_backend.utils.DocumentUtils;

import java.io.IOException;

@Service
public class DocumentService {

    @Autowired
    private DocumentRepository repository;

    public String uploadImage(MultipartFile file ,String email) throws IOException {

        Document imageData = repository.save(Document.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .email(email)
                .content(DocumentUtils.compressImage(file.getBytes())).build());
        if (imageData != null) {
            return "file uploaded successfully : " + file.getOriginalFilename();
        }
        return null;
    }

    public byte[] downloadImage(String email){
        Optional<Document> dbImageData = repository.findByEmail(email);
        byte[] images=DocumentUtils.decompressImage(dbImageData.get().getContent());
        return images;
    }
}

