package com.main.agro_fundx_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.agro_fundx_backend.dto.request.ProfileEditRequest;
import com.main.agro_fundx_backend.entity.LoanApplicantModel;
import com.main.agro_fundx_backend.service.LoanApplicantService;


@RestController
@RequestMapping("/loans")
@CrossOrigin
public class LoanController {
    @Autowired
    private LoanApplicantService LoanService;

    @GetMapping("/get")
    public List<LoanApplicantModel>getLoan(){
        return LoanService.getLoan();
    }
    @GetMapping("/get/name/{name}")
    public List<LoanApplicantModel>getByName(@PathVariable String name){
        return LoanService.getByName(name);
    }
    @GetMapping("/get/email/{email}")
    public List<LoanApplicantModel>getByEmail(@PathVariable String email){
        return LoanService.getByEmail(email);
    }

    @PostMapping("/post")
    public String AddLoan(@RequestBody LoanApplicantModel loan){
        return LoanService.addLoan(loan);
    }

    @GetMapping("/get/{trackid}")
    public ResponseEntity<?> getByTrackId(@PathVariable long trackid){
        return LoanService.getDetailsByLoanId(trackid);
    }

    @PutMapping("/put/{trackid}/{status}")
    public boolean deleteFarmer(@PathVariable long trackid , @PathVariable String status){
        return LoanService.editStatus(trackid , status);
    }

    @GetMapping("/get/applied")
    public List<LoanApplicantModel> getAppliedDetails(){
        return LoanService.getAppliedDetails();
    }
}
