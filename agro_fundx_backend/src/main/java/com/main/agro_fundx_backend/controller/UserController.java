package com.main.agro_fundx_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.agro_fundx_backend.dto.request.ProfileEditRequest;
import com.main.agro_fundx_backend.entity.User;
import com.main.agro_fundx_backend.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/get")
    public List<User>getUser(){
        return userService.getUser();
    }

    // @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/get/{email}")
    public User getUserByEmail(@PathVariable String email){
        System.out.println("hello");
        return userService.getUserByEmail(email);
    }
    @PutMapping("/put/{email}")
    public User deleteFarmer(@RequestBody ProfileEditRequest request , @PathVariable String email){
        return userService.editUser(request , email);
    }
}
