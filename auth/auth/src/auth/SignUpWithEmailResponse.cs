using System.ComponentModel.DataAnnotations;

public record class SignUpWithEmailResponse
{
    [Required(ErrorMessage = "Nickname 기재하십시오")]
    public required string Nickname { get; set; }
}