package br.com.accurate.achadoperdido.exceptions;

public class ItemNaoLocalizadoException extends RecursoNaoEncontradoException {
    public ItemNaoLocalizadoException(String nome) {
        super("Não foi possível Localizar: " + nome);
    }
}
