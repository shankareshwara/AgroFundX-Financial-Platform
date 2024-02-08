package com.main.agro_fundx_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.agro_fundx_backend.entity.LoanApplicantModel;
import com.main.agro_fundx_backend.repository.LoanApplicantRepository;

@Service
public class LoanApplicantService {

      @Autowired
    private LoanApplicantRepository repo;

    public List<LoanApplicantModel> getLoan(){
        return repo.findAll();
    }

    public boolean addLoan(LoanApplicantModel loan){
        System.out.println(loan.toString());
        return repo.save(loan) != null ? true : false;
    }
}
