using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Options
{
    public record DatabaseOptions
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string ConnectionString { get; set; }
    }
}
