public interface IUserAuthenticateRepository
{
    Task<UserAuthenticate> GetUserAuthenticate(
        UserAuthenticateProviderType providerType,
        string providerKey);

    Task AddUserAuthenticate(
        UserAuthenticate userAuthenticate
    );
}