package com.main.agro_fundx_backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.agro_fundx_backend.dto.request.AuthenticationRequest;
import com.main.agro_fundx_backend.dto.request.RegisterRequest;
import com.main.agro_fundx_backend.dto.response.AuthenticationResponse;
import com.main.agro_fundx_backend.service.AuthenticationService;


import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @PostMapping("/loginAdmin")
    public ResponseEntity<AuthenticationResponse> loginAdmin(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.loginAdmin(request));
    } 
}
