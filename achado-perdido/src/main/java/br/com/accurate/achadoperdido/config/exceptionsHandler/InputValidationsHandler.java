package br.com.accurate.achadoperdido.config.exceptionsHandler;

import br.com.accurate.achadoperdido.config.dto.InputValidationDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.ArrayList;
import java.util.List;

@RestControllerAdvice
public class InputValidationsHandler {

    @Autowired
    MessageSource messageSource;

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public List<InputValidationDTO> handleInvalidArgument(MethodArgumentNotValidException erro) {
        List<InputValidationDTO> dtoErrors = new ArrayList<>();

        List<FieldError> fieldErrors = erro.getBindingResult().getFieldErrors();

        fieldErrors.forEach(field -> {
            String erroMessage = messageSource.getMessage(field, LocaleContextHolder.getLocale());
            InputValidationDTO mensagem = new InputValidationDTO(field.getField(), erroMessage);

            dtoErrors.add(mensagem);
        });

        return dtoErrors;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MissingServletRequestParameterException.class)
    public InputValidationDTO handleMissingParameter(MissingServletRequestParameterException erro) {

        return new InputValidationDTO(erro.getParameterName(), "O Parâmetro: '" + erro.getParameterName() + "' não pode estar vazio");
    }

}
