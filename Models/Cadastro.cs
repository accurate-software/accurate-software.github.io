using EncontreItens.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EncontreItens.Models
{
    [Table("TbCadastro")]
    public class Cadastro
    {   
        [Key]
        [Display(Name ="Código")]
        public int ID { get; set; }

        [Required]
        [StringLength(100)]
        [Display(Name = "Nome")]
        public string NomePessoa { get; set; }

        [Required]
        [Display(Name = "Qual seu nome")]
        public long DocumentoPessoa { get; set; }

        [Required]
        [StringLength(150)]
        [Display(Name ="Descreva sobre o objeto perdido")]
        public string DescricaoObjeto { get; set; }

        [Required]
        [Display(Name ="Informe o telefone para contato")]
        public long Telefone { get; set; }

        public virtual Categoria Categoria { get; set; }


    }
}
