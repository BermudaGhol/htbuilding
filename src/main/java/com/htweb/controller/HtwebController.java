package com.htweb.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/")
public class HtwebController {
    @RequestMapping(value = "/gis")
    public String index() {
        return "/gis/gis";
    }
    @RequestMapping(value = "/build")
    public String build() {
        return "/build/build";
    }

    @RequestMapping(value = "/gas")
    public String gasPipeline() {
        return "/gasPipeline/gas";
    }

    @RequestMapping(value = "/gas3d")
    public String gas3d() {
        return "/gasPipeline/gas3d";
    }

    @RequestMapping(value = "/i19")
    public String i19() {
        return "/submarine/i19";
    }

    @RequestMapping(value = "/u")
    public String u() {
        return "/submarine/u";
    }

    @RequestMapping(value = "/warehouse")
    public String warehouse() {
        return "/warehouse/warehouse";
    }

}
