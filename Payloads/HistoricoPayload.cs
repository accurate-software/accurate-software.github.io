using System;

namespace EncontreItens.Payloads
{
    public class HistoricoPayload
    {
        public CadastroPayload ProdutoHistorico { get; set; }
        public StatusProdutoPayload StatusProdutoHistorico { get; set; }
        public DateTime DataRecebimento { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }

    }
}
