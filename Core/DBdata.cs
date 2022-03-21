using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core
{

    public class DBdata
    {
        public List<User> users { get; set; }
        public List<Worker> workers { get; set; }
        public List<Bagcart> bagcarts { get; set; }
        public List<Bag> bags { get; set; }
        public List<Plane> planes { get; set; }
        public List<Flight> flights { get; set; }
    }

    public class User
    {
        public int telephone { get; set; }
        public string password { get; set; }
        public int id { get; set; }
        public string name { get; set; }
    }

    public class Worker
    {
        public string password { get; set; }
        public int id { get; set; }
        public string name { get; set; }
        public string LName { get; set; }
        public string role { get; set; }
    }

    public class Bagcart
    {
        public int id { get; set; }
        public string model { get; set; }
        public int bags { get; set; }
        public string brand { get; set; }
        public string stamp { get; set; }
    }

    public class Bag
    {
        public int number { get; set; }
        public int cost { get; set; }
        public bool state { get; set; }
        public string colour { get; set; }
        public string type { get; set; }
        public int user { get; set; }
    }

    public class Plane
    {
        public int id { get; set; }
        public string type { get; set; }
        public int bags { get; set; }
        public int capacity { get; set; }
    }

    public class Flight
    {
        public int id { get; set; }
        public int bags { get; set; }
        public int plane { get; set; }
    }

}
