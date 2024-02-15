package com.main.agro_fundx_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.main.agro_fundx_backend.entity.Document;

@Repository
public interface DocumentRepository extends JpaRepository<Document, String> {
    Optional<Document> findByName(String fileName);

    Optional<Document> findByEmail(String email);
}


