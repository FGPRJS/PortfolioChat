public class User
{
    public long Id { get; private set; }
    public string Nickname { get; private set; }


    public ICollection<UserAuthenticate> userAuthenticates { get; private set; }

    private User(string nickname)
    {
        this.Nickname = nickname;
        this.userAuthenticates = [];
    }

    public static User CreateUser(
        string nickname
    )
    {
        var newUser = new User(nickname);

        return newUser;
    }
}