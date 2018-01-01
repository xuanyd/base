package com.base.frontend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdminController {
	@RequestMapping({"frontend/index.html"})
	public String index(){
		return "frontend/index";
	}

 	@RequestMapping({"frontend/expert-list.html"})
	public String index(){
		return "frontend/expert-list";
	}
}