public enum UserAuthenticateProviderType
{
    None = 0,
    EmailPassword = 1
}

public class UserAuthenticate
{
    public long UserId { get; private set; }
    public User User { get; private set; } = null!;
    public UserAuthenticateProviderType ProviderType { get; private set; }
    public string ProviderKey { get; private set; }
    public string ProviderValue { get; private set; }

    private UserAuthenticate(
        long userId,
        UserAuthenticateProviderType providerType,
        string ProviderKey,
        string providerValue)
    {
        this.UserId = userId;
        this.ProviderType = providerType;
        this.ProviderKey = ProviderKey;
        this.ProviderValue = providerValue;
    }

    public static UserAuthenticate CreateUserAuthenticate(
        long userId,
        UserAuthenticateProviderType providerType,
        string providerKey,
        string providerValue)
    {
        var newUserAuthenticate = new UserAuthenticate(
            userId,
            providerType,
            providerKey,
            providerValue);

        return newUserAuthenticate;
    }
}