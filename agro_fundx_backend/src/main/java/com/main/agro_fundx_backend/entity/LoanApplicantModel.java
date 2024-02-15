package com.main.agro_fundx_backend.entity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "loan_application")
public class LoanApplicantModel {
    @Id
    @GeneratedValue
    private int loanId;
    @Column(nullable = false,length = 64,unique = true)
    private long trackId;
    private String loanType;
    private String applicantName;
    private String applicantAddress;
    private String applicantMobile;

    
    private String applicantEmail;
    private String applicantAadhaar;
    private String applicantPan;
    private String applicantSalary;
    private String loanAmountRequired;
    private String loanRepaymentMonths;
    private String status;
    // @ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
    // @JoinColumn(name = "loan_email")
    // private Document document;
}

