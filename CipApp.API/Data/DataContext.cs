using CipApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CipApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {  
        }
        
        public DbSet<Value> Values { get; set; }
    }
}