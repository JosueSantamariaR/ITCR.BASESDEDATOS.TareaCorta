using System;
using System.Text;
using reader = System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;

namespace Core.Controllers
{
    [Route("User")]
    [ApiController]
    public class UserController : ControllerBase
    {
        // GET: api/User
        [HttpGet]
        public IEnumerable<string> GetUser()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("Login/{id}", Name = "GetLogin")]
        public string UserLogin(int id)
        {
            string filename = @"./database.json";

            dynamic jsonFile = JsonConvert.DeserializeObject(reader.File.ReadAllText(filename));

            string result = "none";

            foreach (var user in jsonFile["users"])
            {
                if (user["id"] == id) {
                    //result = 1;
                    return user.ToString();
                    //break;
                }
                
            }
            
            return result;
        }

        // GET: api/User/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/User
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/User/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
