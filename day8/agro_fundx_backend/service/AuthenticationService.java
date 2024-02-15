package com.main.agro_fundx_backend.service;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.main.agro_fundx_backend.dto.request.AuthenticationRequest;
import com.main.agro_fundx_backend.dto.request.RegisterRequest;
import com.main.agro_fundx_backend.dto.response.AuthenticationResponse;
import com.main.agro_fundx_backend.entity.Admin;
import com.main.agro_fundx_backend.entity.Role;
import com.main.agro_fundx_backend.entity.User;
import com.main.agro_fundx_backend.repository.AdminRepository;
import com.main.agro_fundx_backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {

        if(request.getRole().equals("user")){

                Optional<User> check = userRepository.findByEmail(request.getEmail());
                if(check.isEmpty()){
                var user = User
                        .builder()
                        .name(request.getUsername())
                        .email(request.getEmail())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .role(Role.USER)
                        .phoneNumber(request.getPhoneNumber())
                        .build();
                userRepository.save(user);
                var jwtToken = jwtService.generateToken(user);
                return AuthenticationResponse.builder()
                        .token(jwtToken)
                        .build();
                }
                 return AuthenticationResponse.builder()
                .token("Email Already Exists !!")
                .build();
        }
        else{
                Optional<Admin> check = adminRepository.findByEmail(request.getEmail());
                if(check.isEmpty()){
                var admin = Admin
                        .builder()
                        .username(request.getUsername())
                        .email(request.getEmail())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .role(Role.ADMIN)
                        .build();
                adminRepository.save(admin);
                var jwtToken = jwtService.generateToken(admin);
                return AuthenticationResponse.builder()
                        .token(jwtToken)
                        .build();
                }
                return AuthenticationResponse.builder()
                .token("Admin Already Exists !!")
                .build();
        }
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {

                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
                var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
                var jwtToken = jwtService.generateToken(user);
                return AuthenticationResponse.builder()
                        .token(jwtToken)
                        .build();
    }

    public AuthenticationResponse loginAdmin(AuthenticationRequest request) {
        
        Optional<Admin> admin = adminRepository.findByEmail(request.getEmail());

        if(admin.isEmpty()){
                return AuthenticationResponse.builder()
                        .token("please register")
                        .build();
        }

        else{
                // String email = admin.get().getEmail();
                String password = request.getPassword();

                
                if(passwordEncoder.matches(password, admin.get().getPassword())){
                         return AuthenticationResponse.builder()
                        .token("login succesfully")
                        .build();
                }
                return AuthenticationResponse.builder()
                .token("oops")
                .build();
        }


    }
}
