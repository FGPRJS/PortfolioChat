using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("{Controller}")]
public class AuthController(
    UserService userService
)
{
    private readonly UserService userService = userService;

    [HttpPost("/signup/email")]
    public async Task<SignUpWithEmailResponse> SignUpWithEmail(
        [FromBody] SignUpWithEmailRequest signUpWithEmailRequest)
    {
        var newUser = await this.userService.AddUserByEmail(
            signUpWithEmailRequest.Email,
            signUpWithEmailRequest.Password,
            signUpWithEmailRequest.Nickname
        );

        return new SignUpWithEmailResponse
        {
            Nickname = newUser.Nickname
        };
    }

    [HttpPost("/signin/email")]
    public async Task<SignInWithEmailResponse> SignInByEmail(
        [FromBody] SignInWithEmailRequest signInWithEmailRequest
    )
    {
        var targetUser = await this.userService.GetUserByEmail(
            signInWithEmailRequest.Email,
            signInWithEmailRequest.Password
        );

        return new SignInWithEmailResponse
        {
            Nickname = targetUser.Nickname
        };
    }
}