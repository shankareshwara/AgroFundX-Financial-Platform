package com.main.agro_fundx_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.agro_fundx_backend.dto.request.ProfileEditRequest;
import com.main.agro_fundx_backend.entity.User;
import com.main.agro_fundx_backend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;


    public List<User> getUser(){
        return repo.findAll();
    }

    public boolean editUser(ProfileEditRequest request , String email) {
       
        User user = repo.findByEmail(email).get();

        if(user != null){

            if(request.getUsername() != null){
                user.setName(request.getUsername());
            }
            if(request.getEmail() != null){
                user.setEmail(request.getEmail());
            }
            if(request.getMobileNumber() != null){
                user.setPhoneNumber(request.getMobileNumber());
            } 

            repo.saveAndFlush(user);  
            return true;         
        }

        return false;
    }

    public User getUserByEmail(String email) {
       return repo.findByEmail(email).get();
    }
}
