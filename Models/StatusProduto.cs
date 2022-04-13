using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EncontreItens.Models
{
    [Table("TbStatus")]
    public class StatusProduto
    {
        [Key]
        public int StatusProdutoId { get; set; }
        public string DescricaoTipo { get; set; }
    }
}
