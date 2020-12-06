package com.desafio.achadoseperdidos.enums;

public enum Filter {
    NAME("name"), CATEGORY("category"), CITY("city"), STATE("state"), LOST("lost");

    private String filter;

    Filter(String filter) {
        this.filter = filter;
    }

    public String getFilter() {
        return filter;
    }
}
