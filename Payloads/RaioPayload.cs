namespace EncontreItens.Payloads
{
    public class RaioPayload
    {
        public CategoriaPayload categoriaPayload { get; set; }
        public double Raio { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}
