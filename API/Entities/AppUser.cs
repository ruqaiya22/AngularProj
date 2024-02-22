namespace API.Entities
{
    public class AppUser
    {
        //class=properties + methods(function)

        public int Id { get; set; }
        public string UserName { get; set; }

        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}
