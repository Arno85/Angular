using DatingApp.API.Models.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Models.Users
{
    public class Like
    {
        public int LikerId { get; set; }

        public int LikeeId { get; set; }

        public virtual User Liker { get; set; }

        public virtual User Likee { get; set; }
    }
}
