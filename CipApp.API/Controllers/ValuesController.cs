using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CipApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CipApp.API.Controllers
{
    //http://localhost:5000/api/values
    //[controller] = values
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        DataContext _context;
        public ValuesController(DataContext Context)
        {
            _context = Context;
        }

        // GET api/values
        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var values = await _context.Values.ToListAsync();

            return Ok(values);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValue(int id)
        {
            var value = await _context.Values.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(value);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
