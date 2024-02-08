package com.main.agro_fundx_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.main.agro_fundx_backend.entity.LoanApplicantModel;

public interface LoanApplicantRepository extends JpaRepository<LoanApplicantModel , Integer> {

}
