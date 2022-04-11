using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EncontreItens.Migrations
{
    public partial class AlteradoNomeTabelaTbProdutoToTbCadastro : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TbHistorico_TbProduto_ProdutoHistoricoID",
                table: "TbHistorico");

            migrationBuilder.DropForeignKey(
                name: "FK_TbHistorico_TbStatus_StatusProdutoHistoricoStatusProdutoId",
                table: "TbHistorico");

            migrationBuilder.DropTable(
                name: "TbProduto");

            migrationBuilder.AlterColumn<string>(
                name: "DescricaoTipo",
                table: "TbStatus",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<int>(
                name: "StatusProdutoHistoricoStatusProdutoId",
                table: "TbHistorico",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ProdutoHistoricoID",
                table: "TbHistorico",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "Nome",
                table: "TbCategoria",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateTable(
                name: "TbCadastro",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomePessoa = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    DocumentoPessoa = table.Column<long>(type: "bigint", nullable: false),
                    DescricaoObjeto = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    Telefone = table.Column<long>(type: "bigint", nullable: false),
                    CategoriaId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TbCadastro", x => x.ID);
                    table.ForeignKey(
                        name: "FK_TbCadastro_TbCategoria_CategoriaId",
                        column: x => x.CategoriaId,
                        principalTable: "TbCategoria",
                        principalColumn: "CategoriaId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_TbCadastro_CategoriaId",
                table: "TbCadastro",
                column: "CategoriaId");

            migrationBuilder.AddForeignKey(
                name: "FK_TbHistorico_TbCadastro_ProdutoHistoricoID",
                table: "TbHistorico",
                column: "ProdutoHistoricoID",
                principalTable: "TbCadastro",
                principalColumn: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_TbHistorico_TbStatus_StatusProdutoHistoricoStatusProdutoId",
                table: "TbHistorico",
                column: "StatusProdutoHistoricoStatusProdutoId",
                principalTable: "TbStatus",
                principalColumn: "StatusProdutoId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TbHistorico_TbCadastro_ProdutoHistoricoID",
                table: "TbHistorico");

            migrationBuilder.DropForeignKey(
                name: "FK_TbHistorico_TbStatus_StatusProdutoHistoricoStatusProdutoId",
                table: "TbHistorico");

            migrationBuilder.DropTable(
                name: "TbCadastro");

            migrationBuilder.AlterColumn<string>(
                name: "DescricaoTipo",
                table: "TbStatus",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "StatusProdutoHistoricoStatusProdutoId",
                table: "TbHistorico",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ProdutoHistoricoID",
                table: "TbHistorico",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Nome",
                table: "TbCategoria",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "TbProduto",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CategoriaId = table.Column<int>(type: "int", nullable: false),
                    DescricaoObjeto = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    DocumentoPessoa = table.Column<long>(type: "bigint", nullable: false),
                    NomePessoa = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Telefone = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TbProduto", x => x.ID);
                    table.ForeignKey(
                        name: "FK_TbProduto_TbCategoria_CategoriaId",
                        column: x => x.CategoriaId,
                        principalTable: "TbCategoria",
                        principalColumn: "CategoriaId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TbProduto_CategoriaId",
                table: "TbProduto",
                column: "CategoriaId");

            migrationBuilder.AddForeignKey(
                name: "FK_TbHistorico_TbProduto_ProdutoHistoricoID",
                table: "TbHistorico",
                column: "ProdutoHistoricoID",
                principalTable: "TbProduto",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TbHistorico_TbStatus_StatusProdutoHistoricoStatusProdutoId",
                table: "TbHistorico",
                column: "StatusProdutoHistoricoStatusProdutoId",
                principalTable: "TbStatus",
                principalColumn: "StatusProdutoId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
