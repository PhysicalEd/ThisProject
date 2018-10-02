using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace CV.Models
{
    public class HomeModel
    {
        public string EmployerID { get; set; }
        public string EmployerName { get; set; } = "";
        public string EmployerCompany { get; set; } = "";
        public string EmployerPosition { get; set; } = "";

        public bool IsValidated { get; set; }
    }

    
}
