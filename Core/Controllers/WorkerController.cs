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

        // POST: api/Worker
        [HttpPost]
        public void Post([FromBody] Worker value)
        {
            string filename = @"./database.json";

            JObject jsonFile = JObject.Parse(filename);

            List<Worker> workers = new List<Worker>();

            foreach (var worker in jsonFile["workers"])
            {
                workers.Add(new Worker() {password = worker["password"].ToString() ,
                    id = (int) worker["id"],
                    name = worker["name"].ToString(),
                    LName = worker["LName"].ToString(),
                    role = worker["role"].ToString()
                }
                );
            }

            JArray workersJson = (JArray)jsonFile["workers"];

            

            //string json = JsonConvert.SerializeObject(objDese);
            

            

            //Console.WriteLine(json);


            //jsonFile["workers"] = json;

            //reader.File.WriteAllText(filename, jsonObj.ToString());

            Console.WriteLine(jsonFile);
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
