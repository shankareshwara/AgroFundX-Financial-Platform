package com.main.agro_fundx_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.main.agro_fundx_backend.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>{

    Optional<Admin> findByEmail(String email);
}
