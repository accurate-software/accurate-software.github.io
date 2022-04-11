using EncontreItens.Models;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EncontreItens.Models
{
    [Table("TbHistorico")]
    public class HistoricoAchados
    {
        [Key]
        public int HistoricoId { get; set; }
        public Cadastro ProdutoHistorico { get; set; }
        public StatusProduto StatusProdutoHistorico { get; set; }
        public DateTime DataRecebimento { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }

    }
}
