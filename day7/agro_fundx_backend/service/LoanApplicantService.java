package com.main.agro_fundx_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.agro_fundx_backend.dto.request.ProfileEditRequest;
import com.main.agro_fundx_backend.entity.LoanApplicantModel;
import com.main.agro_fundx_backend.entity.User;
import com.main.agro_fundx_backend.repository.LoanApplicantRepository;

import org.springframework.http.ResponseEntity;

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

    public ResponseEntity<?> getDetailsByLoanId(long trackid) {
       
        Optional<LoanApplicantModel> details = repo.findByTrackId(trackid);

        if(!details.isEmpty()){
            return ResponseEntity.ok(details.get());
        }
        return ResponseEntity.ok("please enter valid trackind id");

    }

    public boolean editStatus(long trackid , String status) {
        
        LoanApplicantModel details = repo.findByTrackId(trackid).get();

        if(details != null){
            details.setStatus(status);
            repo.saveAndFlush(details);  
            return true;         
        }

        return false;
    }

    public List<LoanApplicantModel> getAppliedDetails() {
       return repo.findByAccepted();
    }
}
