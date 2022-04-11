using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EncontreItens.Models
{
    [Table("TbCategoria")]
    public class Categoria
    {
        [Key]
        public int CategoriaId { get; set; }
        public string Nome { get; set; }
    }
}
