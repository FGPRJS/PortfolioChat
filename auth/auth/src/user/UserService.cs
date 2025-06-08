using System.Security.Authentication;

public class UserService(
    AuthContext authContext,
    IUserRepository userRepository,
    IUserAuthenticateRepository userAuthenticateRepository
)
{
    private readonly AuthContext authContext = authContext;

    private readonly IUserRepository userRepository = userRepository;
    private readonly IUserAuthenticateRepository userAuthenticateRepository = userAuthenticateRepository;

    public async Task<User> GetUser(long userId)
    {
        return await this.userRepository.GetUserById(userId);
    }

    public async Task<User> GetUserByEmail(string email, string password)
    {
        var targetEmailAuthenticate = await userAuthenticateRepository.GetUserAuthenticate(
            UserAuthenticateProviderType.EmailPassword,
            email
        );

        if (!BCrypt.Net.BCrypt.Verify(password, targetEmailAuthenticate.ProviderValue))
        {
            throw new AuthenticationException("Invalid Email or Password");
        }

        var targetUser = await userRepository.GetUserById(targetEmailAuthenticate.UserId);

        return targetUser;
    }

    public async Task<User> AddUserByEmail(string email, string password, string nickname)
    {
        var newUser = User.CreateUser(nickname);

        await this.userRepository.AddUser(newUser);
        await this.authContext.SaveChangesAsync();

        var encryptedPassword = BCrypt.Net.BCrypt.HashPassword(password);

        var newEmailAuthenticate = UserAuthenticate.CreateUserAuthenticate(
            newUser.Id,
            UserAuthenticateProviderType.EmailPassword,
            email,
            encryptedPassword
        );

        await this.userAuthenticateRepository.AddUserAuthenticate(newEmailAuthenticate);
        await this.authContext.SaveChangesAsync();

        return newUser;
    }
}