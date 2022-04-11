using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EncontreItens.Models;
using EncontreItens.Payloads;


namespace EncontreItens.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistoricoController : ControllerBase
    {
        private readonly Contexto _context;

        public HistoricoController(Contexto context)
        {
            _context = context;
        }

        // GET: api/Historicos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HistoricoAchados>>> GetHistorico([FromQuery] RaioPayload payload)
        {
            if (payload.categoriaPayload != null)
            {
                var produtosCategorias = _context.Historico.Where(w => w.ProdutoHistorico.Categoria.Nome == payload.categoriaPayload.Nome)
                                                           .Include(i => i.ProdutoHistorico)
                                                           .Include(i => i.StatusProdutoHistorico)
                                                           .Include(i => i.ProdutoHistorico.Categoria);
                
                if (payload.Raio > 0 && payload.Latitude != 0 && payload.Longitude != 0) 
                {
                    var listHistorico = new List<HistoricoAchados>();
  
                    foreach (var produto in produtosCategorias) 
                    {
                        double latA = payload.Latitude;
                        double longA = payload.Longitude;
                        double latB = produto.Latitude;
                        double longB = produto.Longitude;

                        var locA = new GeoCoordinatePortable.GeoCoordinate(latA, longA);
                        var locB = new GeoCoordinatePortable.GeoCoordinate(latB, longB);
                        double distance = locA.GetDistanceTo(locB);

                        if(distance < payload.Raio * 1000)
                        {
                            listHistorico.Add(produto);
                        }

                    }
                    return listHistorico;

                }
                return produtosCategorias.ToList();
            }
            return await _context.Historico.Include(i => i.ProdutoHistorico)
                                           .Include(i => i.StatusProdutoHistorico)
                                           .Include(i => i.ProdutoHistorico.Categoria)
                                           .ToListAsync();
        }

        // GET: api/Historicos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HistoricoAchados>> GetHistorico(int id)
        {
            var historico = await _context.Historico.Include(i => i.ProdutoHistorico)
                                                    .Include(i => i.ProdutoHistorico.Categoria)
                                                    .Include(i => i.StatusProdutoHistorico)
                                                    .Where(w => w.HistoricoId == id)
                                                    .FirstOrDefaultAsync();

            if (historico == null)
            {
                return NotFound();
            }

            return historico;
        }

        // PUT: api/Historicos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHistorico(int id, HistoricoAchados historico)
        {

            if (id != historico.HistoricoId)
            {
                return BadRequest();
            }
        
            _context.Entry(historico).State = EntityState.Modified;
        
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HistoricoExists(id))
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

        // POST: api/Historicos
        [HttpPost]
        public async Task<ActionResult<HistoricoAchados>> PostHistorico([FromBody]Payloads.HistoricoPayload historico)
        {
            var produto = _context.Produtos.FirstOrDefault(f => f.ID == historico.ProdutoHistorico.ID);
            var status = _context.StatusProduto.FirstOrDefault(f => f.StatusProdutoId == historico.StatusProdutoHistorico.StatusProdutoId);
            var payload = new HistoricoAchados();
            payload.StatusProdutoHistorico = status;
            payload.ProdutoHistorico = produto;
            payload.Longitude = historico.Longitude;
            payload.Latitude = historico.Latitude;
            payload.DataRecebimento = historico.DataRecebimento;   
            _context.Historico.Add(payload);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetHistorico", new { id = payload.HistoricoId }, payload);
            return _context.Historico.FirstOrDefault(f => f.HistoricoId == payload.HistoricoId);
        }

        // DELETE: api/Historicos/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteHistorico(int id)
        //{
        //    var historico = await _context.Historico.FindAsync(id);
        //    if (historico == null)
        //    {
        //        return NotFound();
        //    }
        //
        //    _context.Historico.Remove(historico);
        //    await _context.SaveChangesAsync();
        //
        //    return NoContent();
        //}
        //
        private bool HistoricoExists(int id)
        {
            return _context.Historico.Any(e => e.HistoricoId == id);
        }
    }
}
