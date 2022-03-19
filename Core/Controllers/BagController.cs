using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Core.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BagController : ControllerBase
    {
        // GET: api/Bag
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

        // POST: api/Bag
        [HttpPost]
        public void Post([FromBody] string value)
        {
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
