using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace netCoreAngular.Models
{
    public class Inspection
    {
        public int Id { get; set; } 

        [StringLength(20)]
        public string Status { get; set; } = string.Empty;  

        [StringLength(200)]
        public string Comments { get; set; } = String.Empty;
        
        public int InsepctionTypeId { get; set; }  
        
        [ForeignKey("InsepctionTypeId")]
        public InspectionType? InspectionType { get; set; }  
    }
}
