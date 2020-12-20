package br.com.accurate.teste.achadoPerdido.models.response;

import java.util.Date;

public class ErrorMessage {

	private Date currentDate;
	private String Message;
	
	public ErrorMessage() {
	}
	
	public ErrorMessage(Date currentDate, String message) {
		this.currentDate = currentDate;
		Message = message;
	}
	public Date getCurrentDate() {
		return currentDate;
	}
	public void setCurrentDate(Date currentDate) {
		this.currentDate = currentDate;
	}
	public String getMessage() {
		return Message;
	}
	public void setMessage(String message) {
		Message = message;
	}
	
	
}
