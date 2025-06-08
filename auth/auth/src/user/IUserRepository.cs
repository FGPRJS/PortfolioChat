public interface IUserRepository
{
    Task<User> GetUserById(long userId);
    Task AddUser(User user);
}