package com.main.agro_fundx_backend.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.main.agro_fundx_backend.entity.LoanApplicantModel;

public interface LoanApplicantRepository extends JpaRepository<LoanApplicantModel , Integer> {

    Optional<LoanApplicantModel> findByTrackId(Long trackid);
    
    @Query("SELECT d FROM LoanApplicantModel d WHERE d.status = 'applied'")
	List<LoanApplicantModel> findByAccepted();
}
