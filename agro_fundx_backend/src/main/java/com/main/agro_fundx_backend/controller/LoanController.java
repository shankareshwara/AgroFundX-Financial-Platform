package com.main.agro_fundx_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.agro_fundx_backend.service.LoanApplicantService;

@RestController
@RequestMapping("/loans")
public class LoanController {
    @Autowired
    private LoanApplicantService loanApplicantService;

    // REST endpoints for loan operations
}
