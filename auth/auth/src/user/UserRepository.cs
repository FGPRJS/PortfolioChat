using Microsoft.EntityFrameworkCore;

public class UserRepository (
    AuthContext authContext
) : IUserRepository
{
    private readonly AuthContext authContext = authContext;

    public async Task AddUser(User user)
    {
        await authContext.Users.AddAsync(user);
    }

    public async Task<User> GetUserById(long userId)
    {
        return await authContext.Users
            .Where(u => u.Id == userId)
            .FirstAsync();
    }
}