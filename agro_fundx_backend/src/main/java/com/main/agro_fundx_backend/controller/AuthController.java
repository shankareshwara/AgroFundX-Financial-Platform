package com.main.agro_fundx_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.agro_fundx_backend.service.AdminService;
import com.main.agro_fundx_backend.service.LoginService;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private LoginService loginService;
    
    @Autowired
    private AdminService adminService;

    // REST endpoints for authentication operations
}
