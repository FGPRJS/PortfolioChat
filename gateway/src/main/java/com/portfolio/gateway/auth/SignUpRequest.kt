package com.portfolio.gateway.auth

data class SignUpRequest(
    val email: String,
    val password: String,
    val nickname: String
)
