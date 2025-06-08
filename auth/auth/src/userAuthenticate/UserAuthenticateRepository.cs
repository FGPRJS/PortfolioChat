
using Microsoft.EntityFrameworkCore;

public class UserAuthenticateRepository (
    AuthContext authContext
): IUserAuthenticateRepository
{
    private readonly AuthContext authContext = authContext;

    public async Task AddUserAuthenticate(
        UserAuthenticate userAuthenticate)
    {
        await this.authContext.UserAuthenticates.AddAsync(userAuthenticate);
    }

    public async Task<UserAuthenticate> GetUserAuthenticate(
        UserAuthenticateProviderType providerType,
        string providerKey)
    {
        return await this.authContext.UserAuthenticates
            .Where(ua => ua.ProviderType == providerType)
            .Where(ua => ua.ProviderKey == providerKey)
            .FirstAsync();
    }
}