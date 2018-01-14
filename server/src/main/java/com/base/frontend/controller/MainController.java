package com.base.frontend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	@RequestMapping({"frontend/index.html"})
	public String index(){
		return "frontend/index";
	}

 	@RequestMapping({"frontend/expert-list.html"})
	public String expertList(){
		return "frontend/expert-list";
	}

	@RequestMapping({"frontend/contact.html"})
	public String contact(){
		return "frontend/contact";
	}
}