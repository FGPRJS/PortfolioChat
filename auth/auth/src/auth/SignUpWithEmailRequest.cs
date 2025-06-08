using System.ComponentModel.DataAnnotations;

public record class SignUpWithEmailRequest
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

    [Required(ErrorMessage = "Nickname 기재하십시오.")]
    [RegularExpression(
        @"^[\p{L}\d]{2,}$",
        ErrorMessage = "Nickname validation 불만족")]
    public required string Nickname { get; set; }
}