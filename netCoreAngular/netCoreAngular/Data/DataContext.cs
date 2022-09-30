using Microsoft.EntityFrameworkCore;
using netCoreAngular.Models;

namespace netCoreAngular.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Inspection> Inspections { get; set; }
        public DbSet<InspectionType> InsepectionTypes { get; set; }
        public DbSet<Status> Statuses { get; set; }
        
    }
}
