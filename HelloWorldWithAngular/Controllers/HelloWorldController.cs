using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HelloWorldWithAngular.Models;
using Microsoft.AspNetCore.Mvc;

namespace HelloWorldWithAngular.Controllers
{
    [Route("api/helloWorld")]
    public class HelloWorldController : Controller
    {
        [HttpGet] 
        public string[] Get()
        {
            return new string[] { "Hello", "world" };
        }
    }
}