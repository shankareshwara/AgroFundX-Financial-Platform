package com.main.agro_fundx_backend.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class LoanApplicantModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int loanId;
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

    public LoanApplicantModel() {
        // Default constructor required by JPA
    }

    public LoanApplicantModel(String loanType, String applicantName, String applicantAddress,
                              String applicantMobile, String applicantEmail, String applicantAadhaar,
                              String applicantPan, String applicantSalary, String loanAmountRequired,
                              String loanRepaymentMonths) {
        this.loanType = loanType;
        this.applicantName = applicantName;
        this.applicantAddress = applicantAddress;
        this.applicantMobile = applicantMobile;
        this.applicantEmail = applicantEmail;
        this.applicantAadhaar = applicantAadhaar;
        this.applicantPan = applicantPan;
        this.applicantSalary = applicantSalary;
        this.loanAmountRequired = loanAmountRequired;
        this.loanRepaymentMonths = loanRepaymentMonths;
    }

    // Getters and setters for each attribute

    @Override
    public String toString() {
        return String.format("LoanApplicantModel(loanId=%d, loanType=%s, applicantName=%s, applicantAddress=%s, " +
                "applicantMobile=%s, applicantEmail=%s, applicantAadhaar=%s, applicantPan=%s, " +
                "applicantSalary=%s, loanAmountRequired=%s, loanRepaymentMonths=%s)",
                loanId, loanType, applicantName, applicantAddress, applicantMobile, applicantEmail,
                applicantAadhaar, applicantPan, applicantSalary, loanAmountRequired, loanRepaymentMonths);
    }
}

