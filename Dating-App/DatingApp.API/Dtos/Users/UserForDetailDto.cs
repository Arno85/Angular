using DatingApp.API.Dtos.Photos;
using DatingApp.API.Models.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Dtos.Users
{
    public class UserForDetailDto
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public string Username { get; set; }

        public string gender { get; set; }

        public string KnownAs { get; set; }

        public int Age { get; set; }

        public DateTime DateOfBirth { get; set; }

        public DateTime Created { get; set; }

        public DateTime LastActive { get; set; }

        public string Introduction { get; set; }

        public string LookingFor { get; set; }

        public string Interests { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string PhotoUrl { get; set; }

        public ICollection<PhotoForDetailDto> Photos { get; set; }

        public bool IsLikedByUser { get; set; }
    }
}
