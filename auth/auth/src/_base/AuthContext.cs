using Microsoft.EntityFrameworkCore;

public class AuthContext : DbContext
{
    public DbSet<User> Users => Set<User>();
    public DbSet<UserAuthenticate> UserAuthenticates => Set<UserAuthenticate>();

    public AuthContext(DbContextOptions<AuthContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd();
        });

        modelBuilder.Entity<UserAuthenticate>(entity =>
        {
            entity.HasKey(ua => new { ua.UserId, ua.ProviderType });
            entity.HasOne(ua => ua.User)
                .WithMany(u => u.userAuthenticates)
                .HasForeignKey(ui => ui.UserId);
            entity.HasIndex(ua => new { ua.ProviderType, ua.ProviderKey });
        });

        base.OnModelCreating(modelBuilder);
    }
}