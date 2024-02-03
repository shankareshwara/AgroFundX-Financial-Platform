package com.main.agro_fundx_backend.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class LoginModel {
    @Id
    private String email;
    private String password;

    public LoginModel() {
        // Default constructor required by JPA
    }

    public LoginModel(String email, String password) {
        this.email = email;
        this.password = password;
    }

    // Getters and setters for each attribute

    @Override
    public String toString() {
        return String.format("LoginModel(email=%s, password=%s)", email, password);
    }
}
