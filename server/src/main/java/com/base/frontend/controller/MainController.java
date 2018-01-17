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
	
	/*kejianxiazai*/
	@RequestMapping({"frontend/download.html"})
	public String download(){
		return "frontend/vedio";
	}

	/*kp*/
	@RequestMapping({"frontend/scientific.html"})
	public String scientific(){
		return "frontend/scientific";
	}

	/*yiqijinzan*/
	@RequestMapping({"frontend/instrument.html"})
	public String instrument(){
		return "frontend/instrument";
	}

	/*shipin*/
	@RequestMapping({"frontend/vedio.html"})
	public String vedio(){
		return "frontend/vedio";
	}

}