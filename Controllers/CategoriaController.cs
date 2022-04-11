﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EncontreItens.Models;

namespace ApiAchadosAccurate.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaController : ControllerBase
    {
        private readonly Contexto _context;

        public CategoriaController(Contexto context)
        {
            _context = context;
        }

        // GET: api/Categoria
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Categoria>>> GetCategorias()
        {
            return await _context.Categorias.ToListAsync();
        }

        // GET: api/Categoria/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Categoria>> GetCategoria(int id)
        {
            var categoria = await _context.Categorias.FindAsync(id);

            if (categoria == null)
            {
                return NotFound();
            }

            return categoria;
        }

        // PUT: api/Categoria/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutCategoria(int id, Categoria categoria)
        //{
        //    if (id != categoria.CategoriaId)
        //    {
        //        return BadRequest();
        //    }
        //
        //    _context.Entry(categoria).State = EntityState.Modified;
        //
        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!CategoriaExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }
        //
        //    return NoContent();
        //}

        // POST: api/Categoria
        [HttpPost]
        public async Task<ActionResult<Categoria>> PostCategoria(Categoria categoria)
        {
            _context.Categorias.Add(categoria);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCategoria", new { id = categoria.CategoriaId }, categoria);
        }

        // DELETE: api/Categoria/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteCategoria(int id)
        //{
        //    var categoria = await _context.Categorias.FindAsync(id);
        //    if (categoria == null)
        //    {
        //        return NotFound();
        //    }
        //
        //    _context.Categorias.Remove(categoria);
        //    await _context.SaveChangesAsync();
        //
        //    return NoContent();
        //}

        private bool CategoriaExists(int id)
        {
            return _context.Categorias.Any(e => e.CategoriaId == id);
        }
    }
}
