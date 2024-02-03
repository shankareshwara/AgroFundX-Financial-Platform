package com.main.agro_fundx_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.agro_fundx_backend.service.FarmerService;

@RestController
@RequestMapping("/users")
public class FarmerController {
    @Autowired
    private FarmerService userService;

    // REST endpoints for user operations
}
