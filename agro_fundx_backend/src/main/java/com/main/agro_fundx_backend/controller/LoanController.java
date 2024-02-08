package com.main.agro_fundx_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.agro_fundx_backend.entity.LoanApplicantModel;
import com.main.agro_fundx_backend.service.LoanApplicantService;


@RestController
@RequestMapping("/loans")
public class LoanController {
    @Autowired
    private LoanApplicantService LoanService;

    @GetMapping("/get")
    public List<LoanApplicantModel>getLoan(){
        return LoanService.getLoan();
    }

    @PostMapping("/post")
    public boolean AddLoan(@RequestBody LoanApplicantModel loan){
        return LoanService.addLoan(loan);
    }
}
