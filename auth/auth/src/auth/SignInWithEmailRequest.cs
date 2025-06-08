using System.ComponentModel.DataAnnotations;

public record class SignInWithEmailRequest
{
    [Required(ErrorMessage = "Email 기재하십시오.")]
    [RegularExpression(
        @"^(?=.{4,})[^\s@]+@[^\s@]+\.[^\s@]+$",
        ErrorMessage = "Email validation 불만족")]
    public required string Email { get; set; }

    [Required(ErrorMessage = "Password 기재하십시오.")]
    [RegularExpression(
        @"^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':""\\|,.<>\/?])(?=.{8,}).+$",
        ErrorMessage = "Password validation 불만족")]
    public required string Password { get; set; }
}