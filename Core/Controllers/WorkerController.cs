using System;
using reader = System.IO;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Core.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class WorkerController : ControllerBase
    {
        /*
        // GET: api/Worker
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Worker/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        */

        // POST: /Worker
        [HttpPost]
        public void Post([FromBody] Worker value)
        {
            string filename = @"./database.json";

            DBdata data = JsonConvert.DeserializeObject<DBdata>(reader.File.ReadAllText(filename));

            data.workers.Add(value);

            reader.File.WriteAllText(filename, JsonConvert.SerializeObject(data));

            

        }

        /*
        // PUT: api/Worker/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        */
    }
}
