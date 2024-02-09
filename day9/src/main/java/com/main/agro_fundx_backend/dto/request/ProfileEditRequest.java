package com.main.agro_fundx_backend.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProfileEditRequest {
    private String email;
    private String username;
    private String mobileNumber;
}
