using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EncontreItens.Models;


namespace EncontreItens.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CadastroController : ControllerBase
    {
        private readonly Contexto _context;

        public CadastroController(Contexto context)
        {
            _context = context;
        }

        // GET: api/Produtos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cadastro>>> GetProduto([FromQuery] Payloads.CategoriaPayload categoria)
        {
            if (categoria.Nome == null)
            {
                return await _context.Produtos.Include(i => i.Categoria).ToListAsync();
            }


            return await _context.Produtos.Where(w => w.Categoria.Nome == categoria.Nome)
                                           .Include(i => i.Categoria)
                                           .ToListAsync();
        }

        // GET: api/Produtos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cadastro>> GetProduto(int id)
        {

            var produto = await _context.Produtos.Where(w => w.ID == id)
                                                 .Include(i => i.Categoria)
                                                 .FirstOrDefaultAsync() ;

            if (produto == null)
            {
                return NotFound();
            }

            return produto;

        }

        // PUT: api/Produtos/5

        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduto(int id, Cadastro produto)
        {
            if(id != produto.ID)
            {
                return BadRequest();
            }

            if(produto.Categoria?.CategoriaId != null)
            {
                var categoria = _context.Categorias.Find(produto.Categoria.CategoriaId);
                if(categoria != null)
                {
                    var produtoDb = _context.Produtos.Find(id);
                    produtoDb.Categoria = categoria;
                }
            }
            else
            {
                _context.Entry(produto).State = EntityState.Modified;
            }
            

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProdutoExists(id))
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

        // POST: api/Produtos
        [HttpPost]
        public async Task<ActionResult<Cadastro>> PostProduto(Cadastro produto)
        {

            if(produto.Categoria?.Nome != null) 
            {
                var categoriaDb = _context.Categorias.Where(w => w.Nome == produto.Categoria.Nome).FirstOrDefault();
                if(categoriaDb != null)
                {
                    produto.Categoria = categoriaDb;
                }


            }
            _context.Produtos.Add(produto);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduto", new { id = produto.ID }, produto);
        }

        // DELETE: api/Produtos/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteProduto(int id)
        //{
        //    var produto = await _context.Produtos.FindAsync(id);
        //    if (produto == null)
        //    {
        //        return NotFound();
        //    }
        //
        //    _context.Produtos.Remove(produto);
        //    await _context.SaveChangesAsync();
        //
        //    return NoContent();
        //}

        private bool ProdutoExists(int id)
        {
            return _context.Produtos.Any(e => e.ID == id);
        }
    }
}
