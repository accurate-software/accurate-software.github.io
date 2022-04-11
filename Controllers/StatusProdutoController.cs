using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EncontreItens.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

namespace EncontreItens.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatusProdutoController : ControllerBase
    {
        private readonly Contexto _context;

        public StatusProdutoController(Contexto context)
        {
            _context = context;
        }

        // GET: api/StatusProdutos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StatusProduto>>> GetStatusProduto()
        {
            return await _context.StatusProduto.ToListAsync();
        }

        // GET: api/StatusProdutos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StatusProduto>> GetStatusProduto(int id)
        {
            var statusProduto = await _context.StatusProduto.FindAsync(id);

            if (statusProduto == null)
            {
                return NotFound();
            }

            return statusProduto;
        }

        // PUT: api/StatusProdutos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStatusProduto(int id, StatusProduto statusProduto)
        {
            if (id != statusProduto.StatusProdutoId)
            {
                return BadRequest();
            }

            _context.Entry(statusProduto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StatusProdutoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/StatusProdutos
        [HttpPost]
        public async Task<ActionResult<StatusProduto>> PostStatusProduto(StatusProduto statusProduto)
        {
            _context.StatusProduto.Add(statusProduto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStatusProduto", new {id = statusProduto.StatusProdutoId}, statusProduto);
        }

         //DELETE: api/StatusProdutos/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteStatusProduto(int id)
        //{
        //
        //    var statusProduto = await _context.StatusProduto.FindAsync(id);
        //    if (statusProduto == null)
        //    {
        //        return NotFound();
        //    }
        //    _context.StatusProduto.Remove(statusProduto);
        //   
        //    await _context.SaveChangesAsync();
        //
        //    return NoContent();
        //}

        private bool StatusProdutoExists(int id)
        {
            return _context.StatusProduto.Any(e => e.StatusProdutoId == id);
        }
    }
}
