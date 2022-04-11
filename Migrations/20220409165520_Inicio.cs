using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EncontreItens.Migrations
{
    public partial class Inicio : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TbCategoria",
                columns: table => new
                {
                    CategoriaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TbCategoria", x => x.CategoriaId);
                });

            migrationBuilder.CreateTable(
                name: "TbStatus",
                columns: table => new
                {
                    StatusProdutoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DescricaoTipo = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TbStatus", x => x.StatusProdutoId);
                });

            migrationBuilder.CreateTable(
                name: "TbProduto",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomePessoa = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    DocumentoPessoa = table.Column<long>(type: "bigint", nullable: false),
                    DescricaoObjeto = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    Telefone = table.Column<long>(type: "bigint", nullable: false),
                    CategoriaId = table.Column<int>(type: "int", nullable: false)
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

            migrationBuilder.CreateTable(
                name: "TbHistorico",
                columns: table => new
                {
                    HistoricoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProdutoHistoricoID = table.Column<int>(type: "int", nullable: false),
                    StatusProdutoHistoricoStatusProdutoId = table.Column<int>(type: "int", nullable: false),
                    DataRecebimento = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Latitude = table.Column<double>(type: "float", nullable: false),
                    Longitude = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TbHistorico", x => x.HistoricoId);
                    table.ForeignKey(
                        name: "FK_TbHistorico_TbProduto_ProdutoHistoricoID",
                        column: x => x.ProdutoHistoricoID,
                        principalTable: "TbProduto",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TbHistorico_TbStatus_StatusProdutoHistoricoStatusProdutoId",
                        column: x => x.StatusProdutoHistoricoStatusProdutoId,
                        principalTable: "TbStatus",
                        principalColumn: "StatusProdutoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TbHistorico_ProdutoHistoricoID",
                table: "TbHistorico",
                column: "ProdutoHistoricoID");

            migrationBuilder.CreateIndex(
                name: "IX_TbHistorico_StatusProdutoHistoricoStatusProdutoId",
                table: "TbHistorico",
                column: "StatusProdutoHistoricoStatusProdutoId");

            migrationBuilder.CreateIndex(
                name: "IX_TbProduto_CategoriaId",
                table: "TbProduto",
                column: "CategoriaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TbHistorico");

            migrationBuilder.DropTable(
                name: "TbProduto");

            migrationBuilder.DropTable(
                name: "TbStatus");

            migrationBuilder.DropTable(
                name: "TbCategoria");
        }
    }
}
