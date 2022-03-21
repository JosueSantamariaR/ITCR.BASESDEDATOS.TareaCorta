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
    public class BagController : ControllerBase
    {
        // GET: /Bag
        [HttpGet]
        public IEnumerable<string> GetBag()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Bag/5
        [HttpGet("{id}", Name = "GetBag")]
        public string GetBag(int id)
        {
            return "value";
        }

        // POST: /Bag
        [HttpPost]
        public void Post([FromBody] Bag bag)
        {
            string filename = @"./database.json";

            DBdata data = JsonConvert.DeserializeObject<DBdata>(reader.File.ReadAllText(filename));

            data.bags.Add(bag);

            reader.File.WriteAllText(filename, JsonConvert.SerializeObject(data));
        }

        // PUT: api/Bag/5
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
