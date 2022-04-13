using EncontreItens.Models;
using Microsoft.EntityFrameworkCore;


namespace EncontreItens.Models
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {

        }

        public DbSet<Cadastro> Produtos { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<StatusProduto> StatusProduto { get; set; }
        public DbSet<HistoricoAchados> Historico { get; set; }




    }
}
