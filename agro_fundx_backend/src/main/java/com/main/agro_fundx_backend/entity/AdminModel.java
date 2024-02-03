package com.main.agro_fundx_backend.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class AdminModel {
    @Id
    private String email;
    private String password;
    private String mobileNumber;
    private String userRole;

    public AdminModel() {
        // Default constructor required by JPA
    }

    public AdminModel(String email, String password, String mobileNumber, String userRole) {
        this.email = email;
        this.password = password;
        this.mobileNumber = mobileNumber;
        this.userRole = userRole;
    }

    // Getters and setters for each attribute

    @Override
    public String toString() {
        return String.format("AdminModel(email=%s, password=%s, mobileNumber=%s, userRole=%s)", email, password, mobileNumber, userRole);
    }
}

