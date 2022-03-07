package br.com.accurate.achadoperdido.config.exceptionsHandler;

import br.com.accurate.achadoperdido.config.dto.ErroDTO;
import br.com.accurate.achadoperdido.exceptions.RecursoNaoEncontradoException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class RecursoNaoEncontradoHandler {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(RecursoNaoEncontradoException.class)
    public ErroDTO handle(RecursoNaoEncontradoException erro) {
        return new ErroDTO(erro.getMessage());
    }
}
